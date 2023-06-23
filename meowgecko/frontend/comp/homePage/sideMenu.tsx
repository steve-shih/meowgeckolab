import React from 'react';
import { Menu } from 'antd';
import { MenuProps } from 'antd/lib/menu';

interface SideMenuProps {
    items: MenuProps['items'];
}

const SideMenu: React.FC<SideMenuProps> = ({ items }) => {
    return (
        <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
            items={items} />
    );
};

export default SideMenu;
