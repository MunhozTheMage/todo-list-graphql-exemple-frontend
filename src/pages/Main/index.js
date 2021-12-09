import { Button, Divider, Grid, Stack, TextField } from "@mui/material";

import { useCallback, useState } from "react";

import {
  useCreateTodo,
  useDeleteTodo,
  useEditTodo,
  useGetAllTodos,
} from "../../api";

import { getAllTodosQuery } from "../../api/graphql";

import { BodyPaper, TodoItem } from "../../components";

export const MainPage = () => {
  const [input, setInput] = useState("");

  const { data: { todos = [] } = {}, loading } = useGetAllTodos();

  const [editTodo] = useEditTodo();
  const [deleteTodo] = useDeleteTodo();
  const [createTodo] = useCreateTodo();

  const onDelete = useCallback(
    (id) => {
      deleteTodo({
        variables: { id },
        refetchQueries: [{ query: getAllTodosQuery }],
      }).then(
        ({ data: { deleteTodo } = {} }) => deleteTodo && alert("Todo deletado!")
      );
    },
    [deleteTodo]
  );

  const onUpdate = useCallback(
    (id, values) => {
      editTodo({ variables: { id, ...values } });
    },
    [editTodo]
  );

  const onCreate = useCallback(() => {
    createTodo({
      variables: { title: input },
      refetchQueries: [{ query: getAllTodosQuery }],
    });
    setInput("");
  }, [createTodo, input]);

  return (
    !loading && (
      <BodyPaper>
        <Grid container spacing={2} marginBottom="5px">
          <Grid xs={9} item>
            <TextField
              fullWidth
              size="small"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </Grid>
          <Grid xs={3} item>
            <Button fullWidth variant="contained" onClick={onCreate}>
              Criar
            </Button>
          </Grid>
        </Grid>
        <Stack>
          {todos.map(({ id, title, done }, i) => (
            <div key={id}>
              {i !== 0 && <Divider />}
              <TodoItem
                title={title}
                done={done}
                onUpdate={(values) => onUpdate(id, values)}
                onDelete={() => onDelete(id)}
              />
            </div>
          ))}
        </Stack>
      </BodyPaper>
    )
  );
};
