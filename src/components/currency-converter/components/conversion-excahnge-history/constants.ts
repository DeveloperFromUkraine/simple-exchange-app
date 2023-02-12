import { ColumnsType } from "antd/lib/table";
import { IConvertHistoryExchangeRate, IStatisticColumn } from "../../types";

export const statisticColumns: ColumnsType<IStatisticColumn> = [
	{
		title: 'Statistics',
		dataIndex: 'type',
		colSpan: 2,
	},
	{
		title: 'Exchange rate',
		dataIndex: 'value',
		colSpan: 0,
	},
]

export const optionsWithDisabled = [
	{ label: 'Table', value: 'table' },
	{ label: 'Chart', value: 'chart' },
];

export const columns: ColumnsType<IConvertHistoryExchangeRate> = [
	{
		title: 'Date',
		dataIndex: 'date',
	},
	{
		title: 'Exchange rate',
		dataIndex: 'value',
	},
];
