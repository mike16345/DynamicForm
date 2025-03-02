import { Controller, useForm } from "react-hook-form";
import { Box, Button, Grid2, Paper, Typography } from "@mui/material";
import { FC, useMemo } from "react";
import { renderFieldComponent } from "./RenderFormField";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldOptions } from "../../types/FieldTypes";
import generateSchemaFromFields from "../../schemas/validationSchemas";
import useAddForm from "../../hooks/api/forms/useAddForm";

interface DynamicFormProps {
  form: FieldOptions;
}

const DynamicForm: FC<DynamicFormProps> = ({ form }) => {
  const { addForm, loading } = useAddForm();

  const schema = useMemo(() => {
    return generateSchemaFromFields(form);
  }, [form]);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const fields = form.fields;

  const onSubmit = (data: any) => {
    console.log(data);
    addForm({ name: form.title, fields: data }).then((res) => console.log("added form", res));
  };

  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h5" gutterBottom>
        {form.title}
      </Typography>
      <Box component={"form"} noValidate onSubmit={handleSubmit(onSubmit)}>
        <Grid2 container spacing={2} columns={2}>
          {fields.map((field, index) => {
            const isLastInOddRow = index === fields.length - 1 && fields.length % 2 !== 0;

            return (
              <Grid2 key={field.name} size={isLastInOddRow ? 2 : 1}>
                <Controller
                  name={field.name}
                  control={control}
                  render={({ field: controllerField, fieldState, formState }) => {
                    return renderFieldComponent(
                      field,
                      controllerField,
                      formState.errors[field.name]?.message
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
