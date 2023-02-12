import { IConvertHistoryExchangeRate } from "../types";
import { v4 as uuidv4 } from 'uuid';
import { roundTo } from "./roundTo";
export const convertHistoryExchangeRate = (data: {[key: string]: { [key: string]: number } } | undefined) => {
	if(!data) return;

	const response:IConvertHistoryExchangeRate[] = [];

	Object.entries(data).map(([key, value]) => {
		return Object.entries(value).forEach(([currency, value]) => {
			response.push({
				date: key,
				value: roundTo(value, 2),
				currency,
				key: uuidv4(),
			})
		})
	})

	return response.reverse();
}
