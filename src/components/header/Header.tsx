import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import { Header as HeaderMenu } from "antd/lib/layout/layout";

import { useLocation, useNavigate } from "react-router-dom";
import { IMenuCallBackItem } from "./types";
import { menuItems } from "./constants/menuItem";

const headerStyle: React.CSSProperties = {
	position: 'sticky',
	top: 0,
	zIndex: 1,
	width: '100%',
}

export const Header = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const [selectedPage, setSelectedPage] = useState(menuItems.find(item => location.pathname === item.path)!.key);

	useEffect(() => {
		setSelectedPage(menuItems.find(item => location.pathname === item.path)!.key)
	}, [location])

	const handleSelectedPage = (clickedItem: IMenuCallBackItem) => {
		const clickedElementPath = menuItems.find(item => item.key === clickedItem?.key)!.path
		navigate(clickedElementPath)
	}

	return (
		<HeaderMenu style={headerStyle}>
			<div
				style={{
					float: 'left',
					width: 120,
					height: 31,
					margin: '16px 24px 16px 0',
					background: 'rgba(255, 255, 255, 0.2)',
				}}
			/>
			<Menu
				selectedKeys={[selectedPage]}
				theme="dark"
				mode="horizontal"
				defaultSelectedKeys={['1']}
				items={menuItems}
				onClick={handleSelectedPage}
			/>
		</HeaderMenu>
	);
}
