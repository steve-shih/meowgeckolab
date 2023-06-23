import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import makeAnimated from 'react-select/animated';
import dynamic from "next/dynamic";
import { Button, Col, Row, Divider, Space } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined, PlusOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import BengalParents from '../comp/bengalParents';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const G6component = dynamic(
    () => import('../comp/g6Chart'),
    { ssr: false }
)
const inter = Inter({ subsets: ['latin'] })
const centerStyle: Object = {
    position: 'fixed',
    float: 'right',
    display: 'flex',
    height: '100vh',
    width: '100wh'
};
const styless = {
    position: 'fixed',
};
const items1: MenuProps['items'] = ['活體介紹', '相關資訊', '寵物基因計算機'].map((key) => ({
    key,
    label: `${key}`,
}));


const items2: MenuProps['items'] = [LaptopOutlined, LaptopOutlined, LaptopOutlined, LaptopOutlined, LaptopOutlined].map(
    (icon, index) => {
        const key = String(index + 1);
        const itemTilte = ['孟加拉貓', '曼斥肯貓', '豹紋守宮', '肥尾守宮', '鬆獅蜥'];

        return {
            key: `sub${key}`,
            icon: React.createElement(icon),
            label: `${itemTilte[index]}`,

            // children: new Array(1).fill(null).map((_, j) => {
            //     const subKey = index * 4 + j + 1;
            //     return {
            //         key: subKey,
            //         label: `option${subKey}`,
            //     };
            // }),
        };
    },
);

export default function Home(this: any) {
    const [orgChart, changeChart] = useState(null);
    const [femaleArr, femaleGene] = useState([]);
    const [maleArr, maleGene] = useState([]);
    const animatedComponents = makeAnimated();
    const goChart = async (geneMale: Array<string>, geneFemale: Array<string>, gen: boolean) => {
        if (!gen) {
            changeChart(null);
            return {};
        }
        console.log(femaleArr, 'sdfsdfsdfdsfds121312');
        console.log(maleArr, 'sdfsdfsdfdsfds121312');
        console.log(geneFemale, 'sdfsdfsdfdsfds121312');
        console.log(geneMale, 'sdfsdfsdfdsfds121312');
        const body: any = {
            maleArr: geneMale,
            femaleArr: geneFemale
        };
        console.log(JSON.stringify(body), '999999');
        const res = await fetch(`/api/bengalGene`, {
            method: 'POST',
            body: JSON.stringify(body),
        });
        const data = await res.json();
        // console.log(data);
        changeChart(data);
        return data;
    }
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    useEffect(() => {
        console.log('render');
    });

    return (
        <Layout>
            <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                </Breadcrumb>
                <Layout style={{ padding: '24px 0', background: colorBgContainer }}>
                    <Sider style={{ background: colorBgContainer }} width={200}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%' }}
                            items={items2}
                        />
                    </Sider>
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                        <Row>
                            <Col flex={22}>
                                <BengalParents data={'新增父親'} addMale={maleGene} maleArr={maleArr}></BengalParents>
                                <BengalParents data={'新增母親'} addFemale={femaleGene} femaleArr={femaleArr}></BengalParents>
                            </Col>
                            <Col flex={2}>
                                <Button onClick={async () => await goChart(femaleArr, maleArr, true)} >計算</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <G6component data={orgChart} />
                            </Col>
                        </Row>
                    </Content>
                </Layout>
            </Content>
            <Footer style={{ textAlign: 'center' }}>©2023 Created by  cs software </Footer>
        </Layout>
    );
}


