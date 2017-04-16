/**
 * Created by YangQianHui on 2017/4/16.
 */
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}
// mapStateToProps，
// [mapStateToProps(state, [ownProps]): stateProps] (Function)
// 如果为函数,监听Redux store 的变化。store变化，该函数调用。
// 返回一个纯对象，和组件props合并，如果省略这个函数，组件不会监听Redux store。
// 该函数第二个参数：ownProps  传递到组件的props，
// 组件接收到新的props，mapStateToProps也会被调用
const mapStateToProps = (state) => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = {
    onTodoClick: toggleTodo
}

//连接 React 组件与 Redux store
//连接操作不会改变原来的组件类。
//反而返回一个新的已与 Redux store 连接的组件类
const VisibleTodoList = connect(
    // mapStateToProps，
    // 如果为函数,监听Redux store 的变化。store变化，该函数调用。
    // 返回一个纯对象，和组件props合并，如果省略这个函数，组件不会监听Redux store。
    mapStateToProps,
    // mapDispatchToProps
    // [mapDispatchToProps(dispatch, [ownProps]): dispatchProps] (Object or Function)
    // 如果传递的是一个对象，那么每个定义在该对象的函数都将被当作 Redux action creator，这个对象会与Redux store绑定在一起，所定义的方法名将作为属性名，合并到组件的 props 中
    // 如果传递的是一个函数，该函数接收一个dispatch函数，然后由你来决定如何返回一个对象，这个对象通过 dispatch 函数与 action creator 以某种方式绑定在一起（提示：你也许会用到 Redux 的辅助函数
    mapDispatchToProps
)(TodoList)

export default VisibleTodoList
