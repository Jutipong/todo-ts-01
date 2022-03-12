<script setup lang="ts">
import { onMounted } from 'vue';
import { Action, Todos, Todo, Enum } from '../../store/Todo';
import { TodoType, TodoInit } from '../../types/Todo';

const onUpdate = () => {
  let obj = Todos.value.find((r) => r.id === Todo.value.id)!!;
  obj.name = todo.name;
  onClear();
};

const onClear = () => {
  Action.value = Enum.ADD;
  Todo.value = TodoInit;
};
const todo = $ref<TodoType>(TodoInit);
onMounted(() => {
  todo.id = Todo.value.id;
  todo.name = Todo.value.name;
});
</script>

<template>
  <div class="container">
    Todo: <input type="text" v-model="todo.name" style="margin: 5px" />
    <button :disabled="todo.name.length === 0" @click="onUpdate">Update</button>
    <button @click="onClear">Cancel</button>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
