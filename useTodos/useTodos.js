import { useEffect, useMemo, useReducer } from "react";
import { todoReducer } from "./todoReducer";

const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem("todos") || []);
};

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const pendingTodosCount = useMemo(
    () => todos.filter((todo) => !todo.done),
    [todos]
  );

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };
    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    dispatch({
      type: "[TODO] Delete todo",
      payload: id,
    });
  };

  const handleToggleTodo = (id) => {
    dispatch({
      type: "[TODO] Toggle todo",
      payload: id,
    });
  };

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todosCount: todos.length,
    pendingTodosCount: pendingTodosCount.length,
  };
};
