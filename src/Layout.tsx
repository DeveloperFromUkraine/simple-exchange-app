import React from 'react';
import { Outlet } from "react-router-dom";
import cn from 'classnames';
import { Layout as AntdLayout } from "antd";

import styles from './Layout.module.scss'
import { Header } from "./components/header/Header";
import { Content } from "antd/lib/layout/layout";


const contentStyle: React.CSSProperties = {
    padding: '0 50px'
}

export function Layout() {
    return (
        <AntdLayout className={cn("site-layout", styles.layoutHeight)}>
            <Header />
            <Content style={contentStyle}>
                <div id='content'>
                    <Outlet />
                </div>
            </Content>
        </AntdLayout>
    );
}
