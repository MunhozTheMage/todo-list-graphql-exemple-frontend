import { gql } from "@apollo/client";

export const getAllTodosQuery = gql`
  query getAllTodos {
    todos {
      id
      title
      done
    }
  }
`;

export const getTodoQuery = gql`
  query getTodo($id: ID!) {
    todo(id: $id) {
      title
      done
      description
    }
  }
`;

export const createTodoMutation = gql`
  mutation createTodo($title: String!) {
    createTodo(input: { title: $title }) {
      id
      title
      done
    }
  }
`;

export const editTodoMutation = gql`
  mutation editTodo(
    $id: ID!
    $title: String
    $done: Boolean
    $description: String
  ) {
    updateTodo(
      input: { id: $id, title: $title, done: $done, description: $description }
    ) {
      id
      title
      done
    }
  }
`;

export const deleteTodoMutation = gql`
  mutation deleteTodo($id: ID!) {
    deleteTodo(id: $id)
  }
`;
