import type { NextApiRequest, NextApiResponse } from 'next'

// import _ from 'lodash';

type resultData = {
  nodes: object[];
  edges: object[];
};
type Gene = string[];
type Parent = {
  [key: string]: Gene;
}
type comb = {
  name: string
}

const generateOffspring = (gene1: any[], gene2: any[]) => {
  // 根据两个基因组合生成后代
  return gene1.flatMap((g1: any) => gene2.map((g2: any) => [g1, g2]));
}

const sortGenes = (genes: any[]) => {
  // 对基因排序以方便计算概率
  return genes.slice().sort().join('');
}

const calculateProbability = (offspring: Object[], ans: Object[]) => {
  // 计算基因组合的概率
  const probabilityMap = offspring.reduce((acc: { [x: string]: any; }, genes: any) => {
    const key = sortGenes(genes);
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  const total = offspring.length;
  for (const key in probabilityMap) {
    probabilityMap[key] /= total;
  }

  return probabilityMap;
}

const generateMultiGenesOffspring = (parent1: { [x: string]: any; }, parent2: { [x: string]: any; hasOwnProperty: (arg0: string) => any; }) => {
  // 生成多基因组合的后代
  const combinedOffspring = {};

  for (const geneType in parent1) {
    if (parent2.hasOwnProperty(geneType)) {
      combinedOffspring[geneType] = generateOffspring(parent1[geneType], parent2[geneType]);
    }
  }

  return combinedOffspring;
}

const calculateJointProbabilitiesRecursively = (probabilities: string | any[], currentCombination = [], index = 0) => {
  if (index === probabilities.length) {
    let strLabel = '';
    const str = currentCombination.reduce((acc, comb, i) => {
      acc[probabilities[i][0].type] = [comb.name.substring(0, comb.name.length / 2), comb.name.substring(comb.name.length / 2)];
      strLabel += comb.name;
      return acc;
    }, {});

    return [{
      cluster: currentCombination.map(comb => comb.name).join('-'),
      id: currentCombination.reduce((acc, comb, i) => {
        acc[probabilities[i][0].type] = comb.name;
        return acc;
      }, {}),
      label: `${strLabel} => ${currentCombination.reduce((acc, comb) => acc * comb.value, 1)}`,
      gene: str,
      // other: str
    }];
  }

  return probabilities[index].flatMap((probability: any) => {
    const newCombination = currentCombination.concat([probability]);
    return calculateJointProbabilitiesRecursively(probabilities, newCombination, index + 1);
  });
};

const geneGene = (males: any[], females: any[], ans: { nodes: object[]; edges: object[]; }) => {
  males.forEach((male: any, i) => {
    females.forEach((female: any, s) => {
      const parent1 = { ...male };
      const parent2 = { ...female };
      console.log(parent1.nameStr);
      console.log(parent2.nameStr);
      // const parent1Name = _.cloneDeep(parent1.nameStr);
      // const parent2Name = _.cloneDeep(parent2.nameStr);
      const parent1Name = parent1.nameStr;
       const parent2Name = parent2.nameStr;
      // middle node
      ans.nodes.push({
        id: `${parent1Name}${parent2Name}${i}${s}`,
        label: `${parent1Name}配${parent2Name}`,
        cluster: 'middle'
      });
      ans.edges.push({
        source: parent1Name,
        target: `${parent1Name}${parent2Name}${i}${s}`,
      });
      ans.edges.push({
        source: parent2Name,
        target: `${parent1Name}${parent2Name}${i}${s}`,
      });

      delete parent1.nameStr;
      delete parent2.nameStr;

      const combinedOffspring = generateMultiGenesOffspring(parent1, parent2);
      const offspringProbabilitiesArray = Object.entries(combinedOffspring).map(([type, offspring]) => {
        const probabilityMap = calculateProbability(offspring, ans);
        return Object.entries(probabilityMap).map(([name, value]) => ({ type, name, value }));
      });

      const jointProbabilities = calculateJointProbabilitiesRecursively(offspringProbabilitiesArray);
      console.log(`Parent 1: ${male.nameStr}, Parent 2: ${female.nameStr}`);
      console.log(JSON.stringify(jointProbabilities, null, 2));
      jointProbabilities.forEach((node: { label: any; }, nodeIndex: any) => {
        ans.nodes.push({
          id: `${parent1Name}${parent2Name}${i}${s}${nodeIndex}`,
          label: `${node.label}`,
          cluster: `${parent1Name}${parent2Name}${i}${s}`
        });
        ans.edges.push({
          source: `${parent1Name}${parent2Name}${i}${s}`,
          target: `${parent1Name}${parent2Name}${i}${s}${nodeIndex}`,
        });
      });
    });
  });
  return ans;
}




export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<resultData>
) {

  if (req.method === 'POST') {
    console.log(JSON.parse(req.body));
  
    const males = JSON.parse(req.body).maleArr;
    const females = JSON.parse(req.body).femaleArr;
    if(males.length <= 0 && females.length <= 0) {
      res.status(403).json({ name: 'error' })
    } 

    type node = { id: string, label: string, cluster: string, };
    type gene = {
      nodes: object[],
      edges: object[],
    };
    const ans:gene = {
      nodes: [],
      edges: []
    }
    males.forEach((node, i) => {
      const objNode : node = {
        id: `${node.nameStr}`,
        label: node.nameStr,
        cluster: 'male'
      };
      ans.nodes.push(objNode);
    });

    females.forEach((node, i) => {
      const objNode : node = {
        id: `${node.nameStr}`,
        label: node.nameStr,
        cluster: 'female'
      };
      ans.nodes.push(objNode);
    });

    type resultData = {
      nodes: object[];
      edges: object[];
  };

    const datav : resultData = geneGene(males, females, ans);
    console.log(datav)
    res.status(200).json(datav);
  } else {
    res.status(403).json({ name: 'error' })
  }
}
