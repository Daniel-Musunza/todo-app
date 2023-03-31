<template>
  <div>
    <h2>Todo List</h2>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <input type="checkbox" v-model="todo.completed" @change="toggleTodo(index)">
        <span :class="{ 'completed': todo.completed }">{{ todo.text }}</span>
        <button @click="removeTodo(index)">x</button>
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
      this.$store.dispatch('toggleTodo', index)
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

