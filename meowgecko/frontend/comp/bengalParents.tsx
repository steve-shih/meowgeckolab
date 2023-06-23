import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import React, { useState } from 'react';
import { Button, Input } from 'antd';
import ReactModal from 'react-modal';

function BengalParents(prop) {
    const options1 = [
        { value: ['CS', 'CS'], label: '舍利雪豹貓' },
        { value: ['CS', 'CB'], label: '海豹雪豹貓' },
        { value: ['CB', 'CB'], label: '烏賊雪豹貓' },
        { value: ['CB', 'xx'], label: '父母其中一方是烏賊雪豹貓' },
        { value: ['CS', 'xx'], label: '父母其中一方是舍利雪豹貓' },
        { value: ['50CS', '50CB'], label: '父母其中一方是海豹雪豹貓' }
    ]
    const options2 = [
        { value: ['F', 'x'], label: '貓毛有閃光' },
    ]
    const options3 = [
        { value: ['a', 'A'], label: '非炭色是父母一方為黑豹' },
        { value: ['p', 'A'], label: '非炭色父母一方為炭色豹(小時候有面具披風)' },
        { value: ['p', 'a'], label: '面具炭(披風、面具)' },
        { value: ['p', 'p'], label: '炭色豹(小時候有面具披風)' },
        { value: ['a', 'a'], label: '黑豹' },
    ]
    const options4 = [
        { value: ['SL', 'xx'], label: '銀' },
        { value: ['SL', 'SL'], label: '白銀' },
        { value: ['xx', 'xx'], label: '無' }
    ];
    const options5 = [
        { value: ['mx', 'mx'], label: '斑紋不清楚' },
        { value: ['mx', 'MX'], label: '小斑' },
        { value: ['MX', 'MX'], label: '大斑' }
    ];
    const options6 = [
        { value: ['sp', ''], label: '碎斑或偏小斑' },
        { value: ['sp', 'sp'], label: '完整斑紋或更大斑紋' },
        { value: ['', ''], label: '幾乎不明顯斑紋' }
    ];

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-20%',
            transform: 'translate(-30%, -50%)',
        },
    };
    const [show, setShow] = useState(false);
    const [gene, setGene] = useState({});

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const animatedComponents = makeAnimated();
    return (
        <>
            <Button onClick={() => setShow(true)}>{prop.data}</Button>
            <ReactModal
                isOpen={show}
                style={customStyles}
                contentLabel="Minimal Modal Example"
            >

                <div >
                    <div>姓名</div>
                    <Input
                        id="input"
                        type="string"
                        onChange={(event) => {
                            const a = gene;
                            event.persist();
                            a['nameStr'] = event.target.value;
                            console.log(event)
                            setGene(a)
                        }}
                    />
                    <div>雪</div>
                    <Select closeMenuOnSelect={false}
                        components={animatedComponents}
                        isMulti={false}
                        onChange={(event) => {
                            const a = gene;
                            a['snow'] = event.value;
                            setGene(a)
                        }}
                        options={options1} />
                    <div>炭</div>
                    <Select closeMenuOnSelect={false}
                        components={animatedComponents}
                        isMulti={false}
                        options={options3}
                        onChange={(event) => {
                            const a = gene;
                            a['charcoal'] = event.value;
                            setGene(a)
                            console.log(gene);
                        }} />
                    <div>銀</div>
                    <Select closeMenuOnSelect={false}
                        components={animatedComponents}
                        isMulti={false}
                        options={options4} onChange={(event) => {
                            const a = gene;
                            a['sliver'] = event.value;
                            setGene(a)
                        }}/>
                    <div>斑紋大小</div>
                    <Select closeMenuOnSelect={false}
                        components={animatedComponents}
                        isMulti={false}
                        onChange={(event) => {
                            const a = gene;
                            a['fully'] = event.value;
                            setGene(a)
                        }}
                        options={options5} />
                    <div>完整程度</div>
                    <Select closeMenuOnSelect={false}
                        components={animatedComponents}
                        isMulti={false}
                        onChange={(event) => {
                            const a = gene;
                            a['pattern'] = event.value;
                            setGene(a)
                        }}
                        options={options6} />
                </div>

                <Button onClick={() => {
                    console.log(prop);
                        if(prop.addMale){
                            prop.maleArr.push(gene);
                            prop.addMale(prop.maleArr);
                        } else if(prop.addFemale){
                            prop.femaleArr.push(gene)
                            prop.addFemale(prop.femaleArr);
                        }
                        handleClose();
                }}>
                    新增
                </Button>
                <Button onClick={() => setShow(false)}>關閉</Button>
            </ReactModal>
        </>
    );
}

export default BengalParents;
