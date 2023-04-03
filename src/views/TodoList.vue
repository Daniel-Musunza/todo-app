<template>
  <div class="container">
    <h2>Todo List</h2>
    <ul>
      <!-- This loop iterates through the todos array and creates a list item for each todo. -->
      <li v-for="(todo, index) in todos" :key="index">
        <!-- This checkbox input allows the user to toggle the completion status of the todo. -->
        <input type="checkbox" class="toggle" :checked="todo.completed" @change="toggleTodo" />
        <!-- This paragraph displays the text of the todo, and applies a "completed" class if the todo is marked as completed. -->
        <p :class="{ completed: todo.completed }">{{ todo.text }}</p>
        <!-- This button allows the user to remove the todo from the list. -->
        <button class="delete" @click="removeTodo(index)">x</button>
      </li>
    </ul>
  </div>
</template>
<script>
// This is the Vue.js script that defines the component.
export default {
  // This computed property retrieves the todos from the Vuex store.
  computed: {
    todos() {
      return this.$store.state.todos
    }
  },
  // These methods dispatch Vuex actions to toggle and remove todos.
  methods: {
    toggleTodo: function(index) {
      const todo = this.todos[index];
      if (todo) {
        this.$store.dispatch('toggleTodo', index)
      }
    },
    removeTodo: function(index) {
      this.$store.dispatch('removeTodo', index)
    }
  }
}

<style>
/* This style applies a line-through text decoration to completed todos. */
.completed {
  text-decoration: line-through;
}
</style>