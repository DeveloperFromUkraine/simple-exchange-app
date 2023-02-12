import { IConvert } from "../components/currency-converter/types";
import { v4 as uuidv4 } from 'uuid';
import { roundTo } from "../components/currency-converter/helpers/roundTo";
export const saveCurrencyHistoryToLocalStorage = (item: IConvert | undefined) => {

	if (localStorage.getItem('currencyHistory') && item) {

		const items = localStorage.getItem('currencyHistory') || ''
		const data = JSON.parse(items);
		data.unshift(convertItem(item));

		localStorage.setItem('currencyHistory', JSON.stringify(data))
	} else if(!localStorage.getItem('currencyHistory') && item){
		localStorage.setItem('currencyHistory', JSON.stringify([convertItem(item)]))
	}
}


const convertItem = (item: IConvert) => {
	return {
		date: item.date,
		rate: roundTo(item.info.rate, 2),
		amount: item.query.amount,
		from: item.query.from,
		to: item.query.to,
		result: roundTo(item.result, 2),
		key: uuidv4()
	}
}
