import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import BarChart from './BarChart';
import LineChart from './LineChart';

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
            <Link to="/">
                <button>Go back</button>
            </Link>
            <BarChart labels={labelArray} difficultyData={difficultyArray} enjoymentData={enjoymentArray} title={`Ratings of ${studentName}`} />
            <LineChart labels={labelArray} difficultyData={difficultyArray} enjoymentData={enjoymentArray} />
        </div>
    )
}

export default StudentOverviewContainer;
