import React, { Component } from 'react'
import { addTodo, getTodos } from './fetch-utils.js'
export default class TodoPage extends Component {
    state = {
        todos: [],
        todo: ''
    }

    componentDidMount = async () => {
        await this.fetchTodos()
    }

    fetchTodos = async () => {
        const todos = await getTodos(this.props.token)

        this.setState({ todos: todos })
    }

    handleSubmit = async e => {
        e.preventDefault();

        await addTodo(this.state.todo, this.props.token)

        await this.fetchTodos()
    }

    handleTodoChange = e => {
        this.setState({ todo: e.target.value})
    }

    render() {
        return (
            <div>
                <form>
                    <label>To-do
                        <input onChange={this.handleTodoChange}/>
                    </label>
                    <button>Add To-do</button>
                </form>
            </div>
        )
    }
}
