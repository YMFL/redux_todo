/**
 * Created by YangQianHui on 2017/4/16.
 */
const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter //过滤数据
        default:
            return state
    }
};

export default visibilityFilter;
