import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './StudentOverviewContainer.css';

import BarChart from './BarChart';
import LineChart from './LineChart';

function StudentOverviewContainer() {
    const { studentName } = useParams();
    const evaluations = useSelector(state => state.students.evaluations);
    const studentInfo = useSelector(state => state.students.studentData);

    const filteredStudent = studentInfo.find((student) => {
        return student.first_name === studentName
    });

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
        <div className="student-overview__holder">
            <div className="student-info__container">
                <div>
                    <img src={filteredStudent.avatar} alt={filteredStudent.first_name} />
                    <Link to="/">
                        <button>Go back</button>
                    </Link>
                </div>
                <ul>
                    <li><span>Full name:</span> {filteredStudent.first_name} {filteredStudent.last_name}</li>
                    <li><span>Age:</span> {filteredStudent.age}</li>
                    <li><span>Email:</span> {filteredStudent.email}</li>
                </ul>
            </div>
            <BarChart labels={labelArray} difficultyData={difficultyArray} enjoymentData={enjoymentArray} title={`Ratings of ${studentName}`} />
            <LineChart labels={labelArray} difficultyData={difficultyArray} enjoymentData={enjoymentArray} />
        </div>
    )
}

export default StudentOverviewContainer;
