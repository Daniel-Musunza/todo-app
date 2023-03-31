import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: []
  },
  mutations: {
    addTodo: (state, todo) => state.todos.push(todo),
    removeTodo: (state, index) => state.todos.splice(index, 1),
    toggleTodo: (state, index) => state.todos[index].completed = !state.todos[index].completed
  },
  actions: {
    addTodo: ({ commit }, todo) => commit('addTodo', todo),
    removeTodo: ({ commit }, index) => commit('removeTodo', index),
    toggleTodo: ({ commit }, index) => commit('toggleTodo', index)
  },
  getters: {
    completedTodos: state => state.todos.filter(todo => todo.completed),
    remainingTodos: state => state.todos.filter(todo => !todo.completed)
  }
})
