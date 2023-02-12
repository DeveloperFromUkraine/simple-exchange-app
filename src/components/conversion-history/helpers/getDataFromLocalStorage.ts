export const getDataFromLocalStorage = () => {
	if(!localStorage.getItem('currencyHistory')) return []
	return JSON.parse(localStorage.getItem('currencyHistory') || '') || [];
}
