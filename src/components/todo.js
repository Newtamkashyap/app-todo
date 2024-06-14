import Paper from '@mui/material/Paper';
import axios from 'axios'
import './todo.css'
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import AddToDo from './add-todo'

export function Todo() {
    const [todoList, setTodoList] = useState({
        "todos": [
            {
                "id": 1,
                "todo": "Do something nice for someone you care about",
                "completed": false,
                "userId": 152
            }]
    });

    useEffect(() => {
        getTodoListApi();
    }, [])

    const getTodoListApi = () => {
        axios
            .get("https://dummyjson.com/todos")
            .then(response => {
                console.log(response.data);
                setTodoList(response.data);
            })
            .catch(error => console.log(error));
    };

    const deleteTodoListApi = (id) => {
        axios
            .delete("https://dummyjson.com/todos/" + id)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => console.log(error));
    };


    const listItem = todoList.todos.map(obj => <div>
        <Paper elevation={3} className='list'>

            <div>{obj.id}</div>
            <div>{obj.todo}</div>
            <div>{obj.userId}</div>
            <Button variant="contained" onClick={() => deleteTodoListApi(obj.id)}> Delete</Button>
        </Paper>
    </div>);



    return (<>
        <h2>TODO page</h2>
        <AddToDo/>
        <div className="todo-container">{listItem}</div>
    </>)
}