import React from 'react';

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

const useFetch = <T>(url: RequestInfo | URL, options?: RequestInit) => {
  const [data, setData] = React.useState<T | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const optionsRef = React.useRef(options);
  optionsRef.current = options;

  React.useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      setData(null);

      try {
        const response = await fetch(url, {
          signal: abortController.signal,
          ...optionsRef,
        });

        if (!response.ok) throw new Error(`Error: ${response.status}`);

        const json = await response.json();

        if (!abortController.signal.aborted) {
          setData(json);
        }
      } catch (error) {
        if (!abortController.signal.aborted && error instanceof Error)
          setError(error.message);
      } finally {
        if (!abortController.signal.aborted) setLoading(false);
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [url]);

  return {
    data: data,
    loading: loading,
    error: error,
  };
};

export default useFetch;
