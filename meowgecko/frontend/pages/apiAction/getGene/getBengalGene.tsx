// api.ts
export async function getBengalGene(geneMale: Array<string>, geneFemale: Array<string>) {
    const body = {
        maleArr: geneMale,
        femaleArr: geneFemale,
    };

    const res = await fetch(`/api/bengalGene`, {
        method: 'POST',
        body: JSON.stringify(body),
    });

    const data = await res.json();
    return data;
}
