import { evaluationData } from '../../Data/data';
import { studentData } from '../../Data/studentData';

const initialState = {
    evaluations: evaluationData,
    studentData: studentData
};

const studentDataReducer = (state = initialState, action) => {
    return state
};

export default studentDataReducer;