/**
 * Created by YangQianHui on 2017/4/16.
 */
const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            }
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state
            }
            return {
                ...state,
                completed: !state.completed
            }
        default:
            return state
    }
}

const todos = (state = [], action) => {
    switch (action.type) {
        //ADD_TODO的作用是添加input输入的数据
        case 'ADD_TODO':
            return [
                ...state,//原有的状态
                todo(undefined, action)//新添加的状态
            ]
        //TOGGLE_TODO 的作用是遍历每个节点，判断是不是该节点发生了改变
        case 'TOGGLE_TODO':
            return state.map(t =>
                todo(t, action)
            )
        default:
            return state
    }
}

export default todos
