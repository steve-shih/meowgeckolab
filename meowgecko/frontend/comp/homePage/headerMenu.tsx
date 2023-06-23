import React from 'react';
import { Menu } from 'antd';
import { MenuProps } from 'antd/lib/menu';

interface HeaderMenuProps {
    items: MenuProps['items'];
}

const HeaderMenu: React.FC<HeaderMenuProps> = ({ items }) => {
    return (
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} items={items} />
    );
};

export default HeaderMenu;
