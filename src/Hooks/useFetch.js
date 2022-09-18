import { useState, useEffect } from "react";
import { initAxios } from "../Libraries/Fetch";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setData(initAxios(url));
    } catch (error) {
      setError(error);
    }
  }, [url]);

  return { data, error };
};
