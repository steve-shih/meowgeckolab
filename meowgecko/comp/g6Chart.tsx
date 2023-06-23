import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import G6, { Graph } from "@antv/g6";
import style from "antd/es/alert/style";

const G6component = (prop: { data: any; }) => {

  const ref = useRef(null);
  const [graph, setGraph] = useState(null);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    console.log(prop,graph);
    console.log('sdfsfsd');
    if(!prop.data){
    } else {
      console.log('sdfsdf');
    if (!graph) {
      console.log('aaaabbb')
      const colors = [
        '#BDD2FD',
        '#BDEFDB',
        '#C2C8D5',
        '#FBE5A2',
        '#F6C3B7',
        '#B6E3F5',
        '#D3C6EA',
        '#FFD8B8',
        '#AAD8D8',
        '#FFD6E7',
      ];
      const strokes = [
        '#5B8FF9',
        '#5AD8A6',
        '#5D7092',
        '#F6BD16',
        '#E8684A',
        '#6DC8EC',
        '#9270CA',
        '#FF9D4D',
        '#269A99',
        '#FF99C3',
      ];
      const nodes = prop.data.nodes;
      const clusterMap = new Map();
      let clusterId = 0;
      nodes?.forEach((node: { cluster: any; style: { fill?: any; stroke?: any; }; }) => {
        // cluster
        if (node.cluster && clusterMap.get(node.cluster) === undefined) {
          clusterMap.set(node.cluster, clusterId);
          clusterId++;
        }
        const cid = clusterMap.get(node.cluster);
        if (!node.style) {
          node.style = {};
        }
        node.style.fill = colors[cid % colors.length];
        node.style.stroke = strokes[cid % strokes.length];
      });
  
      console.log(ReactDOM.findDOMNode(ref.current))
      const instance  = new G6.Graph({
        width: 1000,
        height: 1000,
        container: ReactDOM.findDOMNode(ref.current),
        modes: {
          default: ['drag-canvas', 'drag-node'],
        },
        layout: {
          type: 'dagre',
          align: 'DL', // 可選  
          nodesep: 10, // 可選  
          ranksep: 10, // 可選  
          controlPoints: true, // 可選  
        },
        animate: true,
        defaultNode: {
          size: 30,
        },
        defaultEdge: {
          style: {
            endArrow: {
              path: 'M 0,0 L 8,4 L 8,-4 Z',
              fill: '#000000',
            },
          },
        },
      });
      instance.data(prop.data);
      instance.render();
      setGraph(instance);
    } else {
      console.log('aaaa')
      graph.changeData(prop.data);
      graph.render();
    }
  }
  }, [prop.data, graph, prop])
  return (<> <div ref={ref}  style={{ width: "100vw", height: "100vh", zIndex: 999}}></div></>)
};

export default G6component;