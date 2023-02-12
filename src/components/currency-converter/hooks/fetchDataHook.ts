import { useCallback, useState } from "react";
import { axClient } from "../../../api/api-entry-point";

export const useFetchDate = <T>() => {
	const [data, setData] = useState<T>();
	const [loaded, setLoaded] = useState(false);
	const [error, setError] = useState<unknown>('');

	const request = useCallback(async (URL: string, params?: {}) => {
		try {
			const { data } = await axClient.get(URL, {
				params: params
			})
			setData(data)
		} catch (e) {
			console.error(e)
			setError(e)
		} finally {
			setLoaded(true)
		}
	}, [])

	return { data, loaded, error, request };
}
