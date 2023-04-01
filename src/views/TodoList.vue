<template>
  <div class="container">
    <h2>Todo List</h2>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <input type="checkbox" class="toggle" :checked="todo.completed" @change="toggleTodo" />
        <p :class="{ completed: todo.completed }">{{ todo.text }}</p>
        <button class="delete" @click="removeTodo(index)">x</button>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  computed: {
    todos() {
      return this.$store.state.todos
    }
  },
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
</script>

<style>
.completed {
  text-decoration: line-through;
}
</style>

