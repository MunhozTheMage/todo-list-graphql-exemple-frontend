import { useMutation, useQuery } from "@apollo/client";

import {
  createTodoMutation,
  deleteTodoMutation,
  editTodoMutation,
  getAllTodosQuery,
  getTodoQuery,
} from "./graphql";

export const useGetAllTodos = (options) => useQuery(getAllTodosQuery, options);
export const useGetTodo = (id, options) =>
  useQuery(getTodoQuery, { ...options, variables: { id } });
export const useCreateTodo = () => useMutation(createTodoMutation);
export const useEditTodo = () => useMutation(editTodoMutation);
export const useDeleteTodo = () => useMutation(deleteTodoMutation);
