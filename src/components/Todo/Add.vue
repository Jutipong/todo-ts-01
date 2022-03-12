<script setup lang="ts">
import { Todos } from '../../store/Todo';
let name = $ref<string>('');

const onAdd = () => {
  Todos.value.unshift({ id: Todos.value.length + 1, name });
  name = '';
};
</script>

<template>
  <div class="container">
    Todo: <input type="text" v-model="name" style="margin: 5px" />
    <button :disabled="name.length === 0" @click="onAdd">Add</button>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.pointer {
  cursor: pointer;
  padding: 5px;
}
</style>
