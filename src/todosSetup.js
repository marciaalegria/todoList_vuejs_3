import initialTodos from "./mocks/todos"
import { computed, ref } from "vue";

const todos = ref([...initialTodos]);
const todosIncompleted= computed(()=> todos.value.filter(t => !t.completed));
const todosCompleted= computed(()=> todos.value.filter(t => t.completed));

const toggle = (id) => {
    const todo = todos.value.find(t => t.id === id)
    if (todo?.completed !== undefined){
        todo.completed = !todo.completed
    }
}
const deleteTodo = (id) => {
    todos.value = todos.value.filter(t => t.id !== id)
}
const add =(name)=> {
    todos.value.push({ id: todos.value.length + 1, name, completed: false })
}

const update = (payload) => {
    todos.value = payload
}
const todosFactory = ()=> ({todosIncompleted, todosCompleted, toggle, deleteTodo, add });

export {todosFactory}