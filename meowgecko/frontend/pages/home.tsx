import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import makeAnimated from 'react-select/animated';
import dynamic from "next/dynamic";
import { Button, Col, Row, Divider, Space } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined, PlusOutlined } from '@ant-design/icons';
import React, { useState, useEffect, useCallback } from 'react';
import BengalParents from '../comp/bengalParents';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { getBengalGene } from './apiAction/getGene/getBengalGene'; // adjust this import to match your file structure
import HeaderMenu from '.././comp/homePage/headerMenu';
import SideMenu from '.././comp/homePage/sideMenu';
import { Gallery } from "react-grid-gallery";
import ReactPaginate from 'react-paginate';
import Modal from 'react-modal';

const { Header, Content, Footer, Sider } = Layout;
const galleryStyle = {
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // 其他樣式設置
};


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

const menuItems = ['介紹', '平台簡介', '寵物區'];
const productMenu = ['貓咪', '爬蟲', '甲蟲'];
const BuyMenu = ['購買需知', '運送'];
const sharedMenu = ['主頁','貼文分享'];
const defaultTab = '寵物基因計算機';


export default function Home(this: any) {
    const [currentTab, setCurrentTab] = useState(defaultTab);
    const [menu, setMenu] = useState(productMenu);
    const [orgChart, changeChart] = useState(null);
    const [femaleArr, femaleGene] = useState([]);
    const [maleArr, maleGene] = useState([]);
    const animatedComponents = makeAnimated();
    const [modalIsOpen, setIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState('');
    const [currentCaption, setCurrentCaption] = useState('');
    const pageSize = 10; // 每頁顯示的圖片數量
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        let newMenu;
        switch(currentTab) {
            case '介紹':
                newMenu = sharedMenu;
                break;
            case '平台簡介':
                newMenu = BuyMenu;
                break;
            case '寵物區':
                newMenu = productMenu;
                break;
            default:
                newMenu = sharedMenu;
        }
        setMenu(newMenu);
    }, [currentTab]); 


    const items1: MenuProps['items'] = menuItems.map((key) => ({
        key,
        label: `${key}`,
        onClick: () => setCurrentTab(key),
    }));

    const items2Select = () => {
       const itemArray = menu.map((items1) =>  LaptopOutlined);
        return itemArray.map(
            (icon, index) => {
                const key = String(index + 1);
    
                return {
                    key: `sub${key}`,
                    icon: React.createElement(icon),
                    label: `${menu[index]}`,
                };
            },
        );
    };



    const goChart = async (geneMale: Array<string>, geneFemale: Array<string>, gen: boolean) => {
        if (!gen) {
            changeChart(null);
            return {};
        }

        const data = await getBengalGene(geneMale, geneFemale);
        changeChart(data);
        return data;
    }

    const images = [
        {
            src: "/resource/meow/123.jpg",
            isSelected: true,
            caption: "After Rain (Jeshu John - designerspics.com)",
            thumbnail: "/resource/meow/123.jpg",
            width: 800,  // add width
            height: 600, // add height
            onClick: (event: number) => openModal(0),
        },
        {
            src: "/resource/meow/123.jpg",
            tags: [
                { value: "Ocean", title: "Ocean" },
                { value: "People", title: "People" },
            ],
            alt: "Boats (Jeshu John - designerspics.com)",
            width: 800,  // add width
            height: 600, // add height
        }
    ];
    function openModal(index: number): void {
        const img = images[index];
        setCurrentImage(img.src || '');
        setCurrentCaption(img.caption || '');
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedImages = images.slice(startIndex, endIndex);
    interface Photo {
        src: string;
        width: number;
        height: number;
    }

    interface PhotoGalleryProps {
        photos: Photo[];
    }

    interface OnPageChangeData {
        selected: number;
    }

    const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos }) => {
        const [currentPage, setCurrentPage] = useState(0);
        const PER_PAGE = 10;
        const offset = currentPage * PER_PAGE;

        const currentPageData = photos
            .slice(offset, offset + PER_PAGE)
            .map((photo) => photo);

        const gallerty = <Gallery
            images={currentPageData}
            onClick={(index, image, event) => openModal(index)}
        />;

        const pageCount = Math.ceil(photos.length / PER_PAGE);
        const handlePageChange = useCallback(({ selected }: OnPageChangeData) => {
            setCurrentPage(selected);
        }, []);

        return (
            <div>
                <ReactPaginate
                    previousLabel={"上一頁"}
                    nextLabel={"下一頁"}
                    breakLabel={"..."}
                    breakClassName={styles.break}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageChange}
                    containerClassName={styles.pagination}
                    activeClassName={styles.active}
                    disabledClassName={styles.disabled}
                />
                {gallerty}

            </div>
        );
    };


    return (
        <Layout style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw' }}>
            <Header className="header">
                <div className="logo" />
                <HeaderMenu items={items1} />
            </Header>
            <Layout style={{ flexGrow: 1, display: 'flex', flexDirection: 'row', overflow: 'hidden' }}>

                <Sider>
                    {currentTab === '介紹' && (
                        // Show these menu items when '介紹' tab is selected
                        <SideMenu items={items2Select()} />
                    )}
                    {currentTab === '平台簡介' && (
                        // Show these menu items when '平台簡介' tab is selected
                        <SideMenu items={items2Select()} />
                    )}
                    {currentTab === '寵物區' && (
                        // Show these menu items when '寵物區' tab is selected
                        <SideMenu items={items2Select()} />
                    )}
                </Sider>
                <Content style={{ flex: 1, justifyContent: 'center', padding: '0 24px', height: '100vh', width: '100vw' }}>

                    {currentTab === '寵物區' && (
                        <div style={{ flex: 1 }}>
                            <PhotoGallery photos={images} />
                        </div>
                    )}
                    <div>
                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            contentLabel="Example Modal"
                            style={{
                                content: {
                                    width: '50vw', // 三分之二的宽度
                                    height: '50vh', // 三分之二的高度
                                    margin: '0 auto',
                                    backgroundColor: 'lightgreen', // 浅绿色背景
                                    display: 'flex',
                                    flexDirection: 'column',
                                },
                                overlay: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }
                            }}
                            className="react-modal-content"
                        >
                            <h2>Image Details</h2>
                            <div style={{ flex: 1, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <img src={currentImage} alt="Enlarged" style={{ width: "40vw", height: "40vh" }} />
                                <p>{currentCaption}</p>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                                <Button onClick={closeModal}>close</Button>
                                <Button onClick={closeModal}>54y</Button>
                            </div>
                        </Modal>

                    </div>
                </Content>
            </Layout>
            <Footer style={{ textAlign: 'center', flexShrink: 0, background: 'gray' }}>©2023 Created by cs software</Footer>
        </Layout>
    );
}


