import React, { FC } from "react";
import { Button, Col, Form, InputNumber, Row, Select, Tooltip } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { IOnExchangeFormSubmit } from "../../types";

import styles from "./ConversionForm.module.scss";

interface IConversionForm {
	onSubmit: (value: IOnExchangeFormSubmit) => void;
	currencyLabels: { value: string; label: string; }[] | undefined
}
export const ConversionForm:FC<IConversionForm> = ({onSubmit, currencyLabels}) => {
	return (
			<>
				<Form
					onFinish={onSubmit}
				>
					<Row gutter={[{xs: 8, sm: 16, md: 24, lg: 32 }, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
						<Col xs={24} sm={8} md={8} lg={8} xl={8}>
							<Form.Item name="amount" rules={[{ required: true, message: 'Amount is required!' }]}>
								<InputNumber min={1} placeholder='Amount' className={styles['amount-input']}/>
							</Form.Item>
						</Col>
						<Col xs={24} sm={7} md={7} lg={7} xl={7}>
							<Form.Item name='currencyFrom' rules={[{ required: true, message: 'Currency From is required!' }]}>
								<Select
									showSearch
									placeholder="Currency 1"
									optionFilterProp="children"
									value={null}
									filterOption={(input, option) =>
										(option?.label ?? '').toLowerCase().includes(input.toLowerCase())
									}
									options={currencyLabels}
									style={{ width: '100%' }}
								/>
							</Form.Item>
						</Col>
						<Col xs={24} sm={7} md={7} lg={7} xl={7}>
							<Form.Item name='currencyTo' rules={[{ required: true, message: 'Currency To is required!' }]}>
								<Select
									showSearch
									placeholder="Currency 2"
									optionFilterProp="children"
									filterOption={(input, option) =>
										(option?.label ?? '').toLowerCase().includes(input.toLowerCase())
									}
									options={currencyLabels}
									style={{ width: '100%' }}
								/>
							</Form.Item>
						</Col>
						<Col xs={24} sm={2} md={2} lg={2} xl={2} className={styles["action-btn"]}>
							<Form.Item>
								<Tooltip title="search">
									<Button htmlType="submit" shape="circle" icon={<SearchOutlined />} />
								</Tooltip>
							</Form.Item>
						</Col>
					</Row>
				</Form>
			</>
		);
}
