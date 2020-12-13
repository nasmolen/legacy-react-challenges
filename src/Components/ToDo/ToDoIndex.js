import React, {Component} from 'react';
import {Input, Button} from 'reactstrap';

 
export default class ToDoIndex extends Component {
    constructor(props) {
        super(props);
        this.addTask = this.addTask.bind(this)
        this.onChangeValue = this.onChangeValue.bind(this)
        this.state = {
            value: '',
            list: []
        }

    }

    onChangeValue(e) {
        this.setState({ value: e.target.value});
    }
    
    addTask() {

        this.setState(state => {
            const list = state.list.concat(state.value);

            return {
                list,
                value: '',
            }
        })
        console.log(this.state.list)
    }

    render() {
        return (
            <div>
                
                <Input type="text" placeholder="Enter task here" value={this.state.value} onChange={this.onChangeValue} />
                <Button type="button" onClick={this.addTask}>Add Task</Button>
                
                <ul>
                    {this.state.list.map(todo => (
                        <li key={todo}>{todo}</li>
                    ))}
                </ul>

            </div>
        )
    }
}