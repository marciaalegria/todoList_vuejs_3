<script setup>
  import { ref } from 'vue';
  import {todosFactory} from './todosSetup';
  import { RouterLink, RouterView } from 'vue-router'
  import todosService from './services/todosService';

  const isLoading = ref(true);
  async function prefetch() {
    todosFactory((await todosService.getTodos()),
    isLoading.value = false)
  }
  prefetch();
</script>

<template>
  <div class="container">
    <h2 v-if="isLoading">Loading TODOs...</h2>
    <template v-if="!isLoading">
      <ul>
        <RouterLink to="/"><li>Todo List</li></RouterLink>
        <RouterLink to="/new"><li>New Todo</li></RouterLink>
      </ul>
      <RouterView />
    </template>
  </div>
</template>

<style>
@import './assets/base.css';
</style>
