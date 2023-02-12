import React, { useEffect } from "react";
import Title from "antd/lib/typography/Title";
import { Divider } from "antd";

import { ConversionForm } from "./components/conversion-form/ConversionForm";
import { ConversionExchangeHistory } from "./components/conversion-excahnge-history/ConversionExchangeHistory";
import { IConvert, IOnExchangeFormSubmit, ISymbolsResponse, ITimeSeries } from "./types";
import { ConversionOutput } from "./components/conversion-output/ConversionOutput";
import { useFetchDate } from "./hooks/fetchDataHook";
import { convertSymbols } from "./helpers/convertSymbols";
import moment from "moment";
import { convertHistoryExchangeRate } from "./helpers/converteHistoryExchangeRate";
import { saveCurrencyHistoryToLocalStorage } from "../../helpers/saveCurrencyHistoryToLocalStorage";


const today = moment();
const priorDate = moment(moment().subtract(30, 'days')).format("YYYY-MM-DD")

export const Conversion = () => {
	const { data, request } = useFetchDate<ISymbolsResponse>()
	const { data: convertedData, request: getConversion } = useFetchDate<IConvert>()
	const { data: timeSeriesData, request: getTimeSeries, loaded: timeSeriesLoaded } = useFetchDate<ITimeSeries>()

	useEffect(() => {
		request('/symbols')
	}, [request])

	useEffect(() => {
		if(convertedData) {
			saveCurrencyHistoryToLocalStorage(convertedData)
		}
	}, [convertedData])

	const currencyLabels = convertSymbols(data?.symbols)

	const onSubmitExchange = (values: IOnExchangeFormSubmit) => {
		getConversion('/convert', { to: values.currencyTo, from: values.currencyFrom, amount: values.amount})
		getTimeSeries('/timeseries', {
			start_date: priorDate,
			end_date: today.format("YYYY-MM-DD"),
			base: values.currencyFrom,
			symbols: values.currencyTo
		})
	}

	const convertedHistoryData = convertHistoryExchangeRate(timeSeriesData?.rates)

	return (
		<div>
			<Title>I want to convert</Title>
			<ConversionForm onSubmit={onSubmitExchange} currencyLabels={currencyLabels}/>
			<ConversionOutput
				amount={convertedData?.query.amount}
				amountToCurrency={convertedData?.result}
				fromCurrency={convertedData?.query.from}
				toCurrency={convertedData?.query.to}
				singleAmountRate={convertedData?.info.rate}
			/>
			<Divider />
			{timeSeriesLoaded && <ConversionExchangeHistory convertedHistoryData={convertedHistoryData}/>}
		</div>
	);
}
