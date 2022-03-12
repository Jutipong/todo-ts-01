<script setup lang="ts">
import TodoDetail from './components/Todo/Detail.vue';
import Add from './components/Todo/Add.vue';
import { Action, Enum, Todo, Todos } from './store/Todo';
import Edit from './components/Todo/Edit.vue';
</script>

<template>
  <Add v-if="Action === Enum.ADD" />
  <Edit v-if="Action === Enum.EDIT" />
  <TodoDetail />
</template>
