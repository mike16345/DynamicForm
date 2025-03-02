import {
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
  Typography,
  MenuItem,
  TextField,
  FormHelperText,
  FormControl,
} from "@mui/material";
import { ControllerRenderProps, FieldValues } from "react-hook-form";
import { Field } from "../../types/FieldTypes";

export const renderFieldComponent = (
  field: Field,
  controllerField: ControllerRenderProps<FieldValues, string>,
  error?: string // Add an optional error message
) => {
  const commonProps = {
    ...controllerField,
    label: field.label,
    fullWidth: true,
    variant: "outlined",
    error: !!error, // Apply error styling
    helperText: error || "", // Show error message if exists
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
          <Select
            {...controllerField}
            displayEmpty
            value={controllerField.value || ""}
            name={field.name}
            renderValue={(value) =>
              value ? value : <Typography color="gray">{field.label}</Typography>
            }
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

    default:
      return (
        <TextField
          {...commonProps}
          type={field.type}
          slotProps={field.type === "date" ? { inputLabel: { shrink: true } } : {}}
        />
      );
  }
};
