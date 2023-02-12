import React, { FC, useEffect, useMemo, useState } from "react";
import { Col, Radio, Row, Select, Table } from "antd";
import Title from "antd/lib/typography/Title";
import { ConversionChart } from "../conversion-chart/ConversionChart";
import { RadioChangeEvent } from "antd/lib";
import { v4 as uuidv4 } from 'uuid';
import { IConvertHistoryExchangeRate, IStatisticColumn } from "../../types";
import { roundTo } from "../../helpers/roundTo";
import { columns, optionsWithDisabled, statisticColumns } from "./constants";

import styles from "./ConversionExchangeHistory.module.scss";

interface IConversionExchangeHistory {
	convertedHistoryData: IConvertHistoryExchangeRate[] | undefined
}

export const ConversionExchangeHistory:FC<IConversionExchangeHistory> = ({convertedHistoryData}) => {
	const [viewValue, setViewValue] = useState('table')
	const [historyOption, setHistoryOptions] = useState<IConvertHistoryExchangeRate[] | undefined>([])

	const exchangeHistoryStatistic = useMemo(() => {
		const statistic:IStatisticColumn[] = []

		if(historyOption?.length) {
			let mini = historyOption[0].value;
			let max = historyOption[0].value;
			let sum = 0;

			for(let i = 0; i < historyOption.length; i++) {
				sum += historyOption[i].value
				if(historyOption[i].value < mini) {
					mini = historyOption[i].value
				} else if(historyOption[i].value > max) {
					max = historyOption[i].value
				}
			}

			statistic.push(
				{
					type: 'Highest',
					value: max,
					key: uuidv4()
				},
				{
					type: 'Average',
					value: roundTo(sum / historyOption.length, 2),
					key: uuidv4()
				},
				{
					type: 'Lowest',
					value: mini,
					key: uuidv4()
				}
			)
		}

		return statistic
	}, [historyOption])

	useEffect(() => {
		setHistoryOptions(convertedHistoryData?.slice(0, 7))
	}, [convertedHistoryData])

	const handleChangeView = ({ target: { value } }: RadioChangeEvent) => {
		setViewValue(value);
	};

	const onChange = (value: string) => {
		setHistoryOptions(convertedHistoryData?.slice(0, Number(value)))
	};

	return (
		<>
			<Row>
				<Col span={24}>
					<Title level={3}>Exchange History</Title>
				</Col>
			</Row>
			<Row gutter={[{xs: 8, sm: 16, md: 24, lg: 32 }, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
				<Col xs={24} sm={12} md={8} lg={8} xl={8}>
					<Select
						placeholder="Duration"
						optionFilterProp="children"
						onChange={onChange}
						defaultValue={'7'}
						options={[
							{
								value: '7',
								label: '7 Days',
							},
							{
								value: '15',
								label: '15 days',
							},
							{
								value: '30',
								label: '30 Days',
							},
						]}
						style={{ width: '100%' }}
					/>
				</Col>
				<Col xs={24} sm={12} md={8} lg={8} xl={8} className={styles["radio-group"]}>
					<Radio.Group options={optionsWithDisabled} onChange={handleChangeView} value={viewValue} />
				</Col>
			</Row>
			{viewValue === 'table' && <Row gutter={[{xs: 8, sm: 16, md: 24, lg: 32 }, { xs: 8, sm: 16, md: 24, lg: 32 }]} style={{marginTop: '25px'}}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Table
                        pagination={false}
                        columns={columns}
                        dataSource={historyOption}
                    />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
					<Table
					    pagination={false}
					    columns={statisticColumns}
					    dataSource={exchangeHistoryStatistic}
					/>
                </Col>
            </Row>}
			{viewValue === 'chart' && <Row gutter={[{xs: 8, sm: 16, md: 24, lg: 32 }, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
                <Col span={24}>
                    <ConversionChart historyOption={historyOption}/>
                </Col>
            </Row>
			}
		</>
	);
}
