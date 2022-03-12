<script setup lang="ts">
import { Todos, Todo, Action, Enum } from '../../store/Todo';
import { TodoType } from '../../types/Todo';

const onEdit = (obj: TodoType) => {
  Todo.value = obj;
  Action.value = Enum.EDIT;
};

const onDel = (obj: TodoType) => {
  const result = Todos.value.filter((r) => r.id !== obj.id);
  Todos.value = result;
};
</script>

<template>
  <div class="container">
    <table>
      <tr v-for="item in Todos" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td class="pointer" @click="onEdit(item)">Edit</td>
        <td class="pointer" @click="onDel(item)">Del</td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 10px;
}
.pointer {
  cursor: pointer;
  padding: 5px;
}
</style>
