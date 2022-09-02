<script setup>
  import todos from '../mocks/todos';
  import { todosFactory } from '../todosSetup'

  const {todosIncompleted, todosCompleted, toggle, deleteTodo }= todosFactory()
</script>

<template>
  <main>
    <h3>Todo List</h3>
    <p v-if="todosIncompleted.lenght === 0">Nada que hacer</p>
    <ul id="incomplete-task">
      <li v-for="todo in todosIncompleted" :key="todo.id" @click="toggle(todo.id)">
        <input type="checkbox">
        <label >{{ todo.name }}</label>
        <input type="text">
        <button class="delete" @click="deleteTodo(todo.id)">Delete</button>
      </li>
    </ul>
    <h3>Completados</h3>
    <ul id="completed-task">
      <li v-for="todo in todosCompleted" :key="todo.id" @click="toggle(todo.id)">
        <input type="checkbox" checked>
        <label >{{ todo.name}}</label>
        <button class="delete" @click="deleteTodo(todo.id)">Delete</button>
      </li>
    </ul>
  </main>
</template>
