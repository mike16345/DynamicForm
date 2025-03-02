import PreviousFormsList from "../Lists/PreviousFormsList";
import useFetchForms from "../../hooks/api/forms/useFetchForms";

const PreviousFormsListWrapper = () => {
  const { loading, error, forms } = useFetchForms();

  if (loading) return <p>Loading...</p>;

  return <PreviousFormsList previousForms={forms} />;
};

export default PreviousFormsListWrapper;
