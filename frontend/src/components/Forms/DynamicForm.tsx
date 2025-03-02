import { Controller, useForm } from "react-hook-form";
import { Box, Button, Grid2, Paper, Typography } from "@mui/material";
import { FC, useMemo } from "react";
import { renderFieldComponent } from "./RenderFormField";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldOptions } from "../../types/FieldTypes";
import generateSchemaFromFields from "../../schemas/validationSchemas";
import useAddForm from "../../hooks/api/forms/useAddForm";
import { useSnackbar } from "../../context/SnackBarProvider";

interface DynamicFormProps {
  form: FieldOptions;
}

const DynamicForm: FC<DynamicFormProps> = ({ form }) => {
  const { addForm, loading } = useAddForm();
  const { showSnackbar } = useSnackbar();

  const schema = useMemo(() => {
    return generateSchemaFromFields(form);
  }, [form]);

  const { handleSubmit, control, reset } = useForm({
    resolver: zodResolver(schema),
  });

  const handleResetForm = () => {
    reset();
  };

  const fields = form.fields;

  const onSubmit = (data: any) => {
    addForm({ name: form.title, fields: data }).then(() =>
      showSnackbar({ severity: "success", message: "Form saved successfully!" })
    );
  };

  return (
    <Paper sx={{ padding: 2 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h5">{form.title}</Typography>
        <Button onClick={handleResetForm} variant="outlined" color="secondary">
          Reset
        </Button>
      </Box>
      <Box component={"form"} noValidate onSubmit={handleSubmit(onSubmit)}>
        <Grid2 container alignItems={"center"} spacing={2} columns={2}>
          {fields.map((field, index) => {
            const isLastInOddRow = index === fields.length - 1 && fields.length % 2 !== 0;

            return (
              <Grid2 key={field.name} size={isLastInOddRow ? 2 : 1}>
                <Controller
                  name={field.name}
                  control={control}
                  render={({ field: controllerField, fieldState }) => {
                    return renderFieldComponent(
                      field,
                      controllerField,
                      fieldState.error?.message as string | undefined
                    );
                  }}
                />
              </Grid2>
            );
          })}
        </Grid2>
        <Button
          type="submit"
          disabled={loading}
          loading={loading}
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Submit
        </Button>
      </Box>
    </Paper>
  );
};

export default DynamicForm;
