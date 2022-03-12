import { ref } from 'vue';
import { TodoInit, TodoType } from '../types/Todo';

const Enum = {
  ADD: 'ADD',
  EDIT: 'EDIT',
};

const Todos = ref<TodoType[]>([]);
const Todo = ref<TodoType>(TodoInit);
const Action = ref(Enum.ADD);

export { Todos, Action, Todo, Enum };
