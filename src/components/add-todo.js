// Render Prop
import React from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';

const AddToDo = () => {

    const saveTodoListApi = (data) => {
        axios
            .post('https://dummyjson.com/todos/add', data)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => console.log(error));
    };


    return (
        <div>
            <Formik
                initialValues={{ todo: '', completed: 'false', userId: '' }}
                validate={values => {

                }}
                onSubmit={(values, { setSubmitting }) => {
               
                    saveTodoListApi(values);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <label>Todo</label>
                        <Field type="text" name="todo" />
                        <label>UserId</label>

                        <Field type="text" name="userId" />
                        <label>Completed</label>

                        <Field type="text" name="completed" />
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default AddToDo;