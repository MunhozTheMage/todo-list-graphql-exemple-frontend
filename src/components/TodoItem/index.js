import { Checkbox, IconButton, Stack, Typography } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

export const TodoItem = ({ title, done, onUpdate, onDelete }) => (
  <Stack
    direction="row"
    alignItems="center"
    justifyContent="space-between"
    marginY="10px"
  >
    <Stack direction="row" alignItems="center">
      <Checkbox
        checked={Boolean(done)}
        onChange={(e) => onUpdate({ done: e.target.checked })}
      />
      <Typography>{title}</Typography>
    </Stack>

    <IconButton onClick={onDelete}>
      <DeleteIcon />
    </IconButton>
  </Stack>
);
