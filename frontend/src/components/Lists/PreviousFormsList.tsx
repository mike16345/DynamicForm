import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
  Paper,
  Grid2,
} from "@mui/material";
import { FC } from "react";

type PreviousFormProps = {
  previousForms: { name: string; fields: Record<string, any> }[];
};

const PreviousFormsList: FC<PreviousFormProps> = ({ previousForms = [] }) => {
  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Previously submitted forms:
      </Typography>
      {previousForms.length === 0 ? (
        <Typography variant="body1">No forms found</Typography>
      ) : (
        <Paper style={{ maxHeight: "75vh", overflow: "auto" }}>
          <List>
            {previousForms.map((form, index) => (
              <Box key={index} mb={2}>
                <ListItem>
                  <ListItemText primary={form.name} />
                </ListItem>
                <Divider />
                <Grid2 container spacing={3}>
                  {Object.entries(form.fields).map(([key, value], idx) => (
                    <Grid2
                      size={{ xs: 6 }}
                      key={key}
                      sx={{
                        ...(idx === Object.entries(form.fields).length - 1 && {
                          gridColumn: "span 2",
                        }),
                      }}
                    >
                      <ListItem>
                        <ListItemText
                          primary={key}
                          secondary={typeof value === "object" ? JSON.stringify(value) : value}
                        />
                      </ListItem>
                    </Grid2>
                  ))}
                </Grid2>
                <Divider sx={{ mt: 1 }} />
              </Box>
            ))}
          </List>
        </Paper>
      )}
    </Paper>
  );
};

export default PreviousFormsList;
