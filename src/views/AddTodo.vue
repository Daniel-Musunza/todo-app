<template>
  <div class="container">
    <h2>Add Todo</h2>
    <form class="todo-form" @submit.prevent="addTodo">
      <input type="text" v-model="todoText">
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      todoText: ''
    }
  },
  methods: {
    addTodo: function() {
      this.$store.dispatch('addTodo', { text: this.todoText, completed: false })
      this.todoText = ''
    }
  }
}
</script>
