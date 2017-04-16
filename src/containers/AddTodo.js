/**
 * Created by YangQianHui on 2017/4/16.
 */
import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let AddTodo = ({ dispatch }) => {
    let input
    return (
        <div>
            <form onSubmit={e => {
                //阻止事件冒泡
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                //改变 store 内 state 的惟一途径是对它 dispatch
                dispatch(addTodo(input.value))
                input.value = ''
            }}>
                <input ref={node => {
                    input = node
                }} />
                <button type="submit">
                    Add Todo
                </button>
            </form>
        </div>
    )
}
AddTodo = connect()(AddTodo)

export default AddTodo
