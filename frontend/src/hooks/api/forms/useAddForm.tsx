import { useState } from "react";

const API_URL = `${import.meta.env.VITE_SERVER_URL}/api/forms/create`;
const useAddForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const addForm = async (formData: Record<string, any>) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to add form");

      return await res.json();
    } catch (err) {
      setError(err instanceof Error ? err : new Error("An unknown error occurred"));
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { addForm, loading, error };
};

export default useAddForm;
