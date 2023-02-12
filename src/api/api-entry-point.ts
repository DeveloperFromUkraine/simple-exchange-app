import axios from "axios";
import { InternalAxiosRequestConfig } from "axios";

export const axClient = axios.create({
	baseURL: 'https://api.apilayer.com/exchangerates_data',
})

axClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
	config.params = config.params || {};
	config.params['apikey'] = "Tqg6GTQRmuYpOTacVsIff3tHVlN6bgUn";
	return config;
})

