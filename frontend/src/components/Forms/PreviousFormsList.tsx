import { Typography, Box, List, ListItem, ListItemText } from "@mui/material";

const PreviousFormsList = () => {
  const previousFormsList = [
    { id: 1, name: "Form 1" },
    { id: 2, name: "Form 2" },
    { id: 3, name: "Form 3" },
  ];

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Previously submitted forms:
      </Typography>
      {previousFormsList.length === 0 && <Typography variant="body1">No forms found</Typography>}
      {previousFormsList.length > 0 && (
        <List>
          {previousFormsList.map((item) => (
            <ListItem key={item.id}>
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default PreviousFormsList;
