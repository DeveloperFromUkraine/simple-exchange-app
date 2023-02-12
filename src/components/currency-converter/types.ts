import React from "react";

export interface IOnExchangeFormSubmit {
	amount: number;
	currencyFrom: string;
	currencyTo: string
}

export interface IConvertHistoryExchangeRate {
	date: string;
	value: number;
	currency: string;
	key: string;
}

export interface IStatisticColumn {
	type: string;
	value: number;
	key: React.Key;
}

export interface ISymbolsResponse {
	symbols: {[key: string]: string}
}

export interface IConvert {
	date: string,
	info: {
		rate: number
	};
	query: {
		from: string;
		to: string;
		amount: number
	}
	result: number;
}

export interface ITimeSeries {
	base: string;
	end_date: string;
	rates: {[key: string]: { [key: string]: number } };
	start_date: string;
}
