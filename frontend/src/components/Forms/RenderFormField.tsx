import {
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
  MenuItem,
  TextField,
  FormHelperText,
  FormControl,
  TextFieldVariants,
  Checkbox,
  InputLabel,
} from "@mui/material";
import { ControllerRenderProps, FieldValues } from "react-hook-form";
import { Field } from "../../types/FieldTypes";

export const renderFieldComponent = (
  field: Field,
  controllerField: ControllerRenderProps<FieldValues, string>,
  error?: string
) => {
  const commonProps = {
    ...controllerField,
    label: field.label,
    fullWidth: true,
    variant: "outlined" as TextFieldVariants,
    error: !!error,
    helperText: error || "",
  };

  switch (field.type) {
    case "radio":
      return (
        <FormControl error={!!error}>
          <RadioGroup {...controllerField} row>
            {field.options?.map((option) => (
              <FormControlLabel key={option} value={option} control={<Radio />} label={option} />
            ))}
          </RadioGroup>
          {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
      );

    case "select":
      return (
        <FormControl fullWidth error={!!error}>
          <InputLabel id={field.label}>Age</InputLabel>
          <Select
            {...controllerField}
            labelId={field.label}
            label={field.label}
            value={controllerField.value || ""}
            name={field.name}
          >
            {field.options?.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
          {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
      );

    case "checkbox":
      return (
        <FormControl error={!!error}>
          <FormControlLabel control={<Checkbox {...controllerField} />} label={field.label} />
          {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
      );

    case "textarea":
      return (
        <TextField {...commonProps} value={controllerField.value || ""} multiline minRows={4} />
      );

    default:
      return (
        <TextField
          {...commonProps}
          value={controllerField.value || ""}
          type={field.type}
          slotProps={field.type === "date" ? { inputLabel: { shrink: true } } : {}}
        />
      );
  }
};
