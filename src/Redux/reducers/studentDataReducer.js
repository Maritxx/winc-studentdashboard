import { evaluationData } from '../../data';

const initialState = {
    evaluations: evaluationData,
    graphFilter: 'SHOW_ALL',
    studentFilter: 'SHOW_ALL', //Will be an array of all names that are selected.
};

const studentDataReducer = (state = initialState, action) => {
    return state
};

export default studentDataReducer;