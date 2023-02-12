import React from "react";
import { Col, Row, Table } from "antd";
import { getDataFromLocalStorage } from "./helpers/getDataFromLocalStorage";
import Title from "antd/lib/typography/Title";
import { columns } from "./types";

export const ConversionHistory = () => {
	const data = getDataFromLocalStorage();

	return (
		<div>
			<Title>Conversion history</Title>
			<Row gutter={[{xs: 8, sm: 16, md: 24, lg: 32 }, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
				<Col span={24}>
					<Table
						pagination={false}
						columns={columns}
						dataSource={data}
					/>
				</Col>
			</Row>
		</div>
	);
}
