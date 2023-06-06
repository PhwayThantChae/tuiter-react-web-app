import { createSlice } from "@reduxjs/toolkit";

const initialTodos = [
 { _id: "123", do: "Accelerate the world's transition to sustainable energy", done: false },
 { _id: "234", do: "Reduce space transportation costs to become a spacefaring civilization", done: false },
];

const todosSlice = createSlice({
 name: 'todos',
 initialState: initialTodos,
 reducers: {
    addTodo(state, action) {
      state.push({
        _id: (new Date()).getTime(),
        do: action.payload.do, 
        done: false
      });
    },
  } 
});

export const { addTodo } = todosSlice.actions;
export default todosSlice.reducer;