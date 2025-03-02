import { Typography, Box, List, ListItem, ListItemText, Divider, Paper } from "@mui/material";
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
                <List disablePadding>
                  {Object.entries(form.fields).map(([key, value]) => (
                    <ListItem key={key} sx={{ pl: 4 }}>
                      <ListItemText
                        primary={key}
                        secondary={typeof value === "object" ? JSON.stringify(value) : value}
                      />
                    </ListItem>
                  ))}
                </List>
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
