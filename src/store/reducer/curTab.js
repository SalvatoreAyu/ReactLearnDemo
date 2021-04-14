import initialState from '../state/curTab'
export default function foo(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_COURSE_FIELD':
            return {
                ...state,
                field: action.field
            };
        default:
            return state
    }
}