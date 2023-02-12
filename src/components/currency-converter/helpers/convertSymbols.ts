export const convertSymbols = (symbols: {[key:string]: string} | undefined) => {
	return symbols && Object.keys(symbols).map(key => {
		return {
			value: key,
			label: key
		}
	})
}
