import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import BarChart from './BarChart';

function StudentOverviewContainer() {
    const { studentName } = useParams();
    const evaluations = useSelector(state => state.students.evaluations);

    //Only shows evaluations from filtered student.
    const individualEvaluations = evaluations.filter((student) => {
        return student.name === studentName
    });

    //Creates arrays with the data to be used in graphs.
    const labelArray = individualEvaluations.map((assignment) => {
        return assignment.assignment
    });

    const difficultyArray = individualEvaluations.map((assignment) => {
        return assignment.difficulty
    });

    const enjoymentArray = individualEvaluations.map((assignment) => {
        return assignment.enjoyment
    }); 


    
    return (
        <div>
            <BarChart labels={labelArray} difficultyData={difficultyArray} enjoymentData={enjoymentArray} title={`Ratings per assignment from ${studentName}`} />
        </div>
    )
}

export default StudentOverviewContainer;
//Create a back-button that will return to the homepage.