import { ref, reactive } from 'vue';
import { TodoType } from '../types/Todo';

const Enum = {
  ADD: 'ADD',
  EDIT: 'EDIT',
};
const Todos = ref<TodoType[]>([]);
const Todo = ref<TodoType>({ id: 0, name: '' });
const Action = ref(Enum.ADD);
export { Todos, Action, Todo, Enum };
