import React, { FC } from "react";
import { BarDatum, ResponsiveBar } from "@nivo/bar";

import styles from './ConversionChart.module.scss';
import { Result } from "antd";
import { IConvertHistoryExchangeRate } from "../../types";

interface IConversionChart {
	historyOption: IConvertHistoryExchangeRate[] | undefined
}
export const ConversionChart:FC<IConversionChart> = ({historyOption}) => {
	return (
		<div className={styles['chart-wrapper']}>
			<div className={styles['chart']}>
				<ResponsiveBar
					data={historyOption as unknown as BarDatum[]}
					indexBy="date"
					margin={{ top: 50, right: 0, bottom: 100, left: 50 }}
					padding={0.3}
					colors={['#1677ff']}
					colorBy='indexValue'
					borderColor={{
						from: 'color',
						modifiers: [
							[
								'darker',
								1.6
							]
						]
					}}
					axisTop={null}
					axisRight={null}
					axisBottom={{
						tickSize: 5,
						tickPadding: 5,
						tickRotation: historyOption && historyOption?.length > 15 ? 90 : 0,
						legend: 'Date',
						legendPosition: 'start',
						legendOffset: 32
					}}
					axisLeft={{
						tickSize: 5,
						tickPadding: 5,
						tickRotation: 0,
						legend: 'Rate',
						legendPosition: 'middle',
						legendOffset: -40
					}}
					labelSkipWidth={12}
					labelSkipHeight={12}
					labelTextColor={{
						from: 'color',
						modifiers: [
							[
								'darker',
								1.6
							]
						]
					}}
				/>
			</div>
			<div className={styles['chart-mobile']}>
				<Result
					status="404"
					title="We're working hard"
					subTitle="Sorry, the chart is visible only on tablets and laptops"
				/>
			</div>
		</div>
	);
}
