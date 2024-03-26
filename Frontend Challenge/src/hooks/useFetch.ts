import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = <T>(url: string) => {
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const fetchData = async () => {
		setLoading(true);
		try {
			const response = await axios.get(url);
			const json = response.data;
			setData(json);
		} catch (error) {
			setError(`${error} Could not Fetch Data `);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, [url]);

	return { data, loading, error };
};
