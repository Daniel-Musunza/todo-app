
import { createStore } from 'vuex'

export default createStore({
  // This is the initial state of the store, with an empty array for the todos.
  state: {
  todos: []
  },
  // These mutations modify the state of the store.
  mutations: {
    // This mutation adds a new todo to the list.
    addTodo: (state, todo) => state.todos.push(todo),
    // This mutation removes a todo from the list.
    removeTodo: (state, index) => state.todos.splice(index, 1),
    // This mutation toggles the completion status of a todo.
    toggleTodo: (state, index) => state.todos[index].completed = !state.todos[index].completed
    },
    // These actions commit mutations to modify the state.
    actions: {
    // This action adds a new todo to the list.
    addTodo: ({ commit }, todo) => commit('addTodo', todo),
    // This action removes a todo from the list.
    removeTodo: ({ commit }, index) => commit('removeTodo', index),
    // This action toggles the completion status of a todo.
    toggleTodo: ({ commit }, index) => {
    commit('toggleTodo', index)
    }
  },
  // These getters retrieve computed data from the state.
  getters: {
    // This getter returns an array of completed todos.
    completedTodos: state => state.todos.filter(todo => todo.completed),
    // This getter returns an array of remaining todos.
    remainingTodos: state => state.todos.filter(todo => !todo.completed)
  }
})