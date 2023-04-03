<template>
  <div class="container">
    <h2>Add Todo</h2>
    <!-- This form allows the user to enter a new todo text and submit it to the Vuex store. -->
    <form class="todo-form" @submit.prevent="addTodo">
      <input type="text" v-model="todoText">
      <button type="submit">Add</button>
    </form>
  </div>
</template>
<script>
// This is the Vue.js script that defines the component.
export default {
  // This data property holds the text of the new todo.
  data: function() {
    return {
      todoText: ''
    }
  },
  // This method dispatches a Vuex action to add a new todo to the store.
  methods: {
    addTodo: function() {
      this.$store.dispatch('addTodo', { text: this.todoText, completed: false })
      // This clears the input field after the todo has been added.
      this.todoText = ''
    }
  }
}
</script>