import { useState, useEffect } from "react";

const API_URL = `${import.meta.env.VITE_SERVER_URL}/api/forms/all`;

const useFetchForms = () => {
  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchForms = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("Failed to fetch forms");
      const data = await res.json();

      setForms(data.data || []);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("An unknown error occurred"));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchForms();
  }, []);

  return { forms, loading, error, fetchForms };
};

export default useFetchForms;
