import { ColumnsType } from "antd/lib/table";

interface IConversion {
	date: string;
	amount: number;
	rate: number;
	from: string;
	to: string;
	result: number;
	key: string;
}
export const columns: ColumnsType<IConversion> = [
	{
		title: 'Date',
		dataIndex: 'date',
	},
	{
		title: 'Exchange rate',
		dataIndex: 'rate',
	},
	{
		title: 'Amount',
		dataIndex: 'amount',
	},
	{
		title: 'Currency From',
		dataIndex: 'from',
	},
	{
		title: 'Currency To',
		dataIndex: 'to',
	},
	{
		title: 'Result',
		dataIndex: 'result',
	}
];
