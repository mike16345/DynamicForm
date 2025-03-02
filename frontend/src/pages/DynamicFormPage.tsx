import { Box, Grid2 } from "@mui/material";
import DynamicForm from "../components/Forms/DynamicForm";
import PreviousFormsListWrapper from "../components/Wrappers/PreviousListWrapper";
import UserRegistrationSchema from "../constants/Fields";

const DynamicFormPage = () => {
  return (
    <Box width={"100%"} height={"100%"} sx={{ padding: 2 }}>
      <Grid2 container spacing={2}>
        <PreviousFormsListWrapper />

        <DynamicForm form={UserRegistrationSchema} />
      </Grid2>
    </Box>
  );
};

export default DynamicFormPage;
