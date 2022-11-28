import { useSelector } from 'react-redux';

import BarChart from "./BarChart";
import LineChart from './LineChart';
import StudentFilter from './StudentFilter';

function ChartContainer() {
    const evaluations = useSelector(state => state.students.evaluations);

    //Creates an array with the total ratings per assignment. 
    const assignmentArray = Object.values(evaluations.reduce((totalEval, {assignment, difficulty, enjoyment}) => {
        totalEval[assignment] = totalEval[assignment] || {assignment, difficulty: 0, enjoyment: 0, ratings: 0};
        totalEval[assignment].difficulty += difficulty;
        totalEval[assignment].enjoyment += enjoyment;
        totalEval[assignment].ratings++
        return totalEval;
    }, []));

    //Creates an array with the average rating per assignment.
    const averageRatingArray = assignmentArray.map(({assignment, difficulty, enjoyment, ratings}) => {
        return {
            assignment,
            difficulty: difficulty / ratings,
            enjoyment: enjoyment / ratings,
            ratings
        }
    });

    //Creates arrays with the data to be used in graphs.
    const labelArray = averageRatingArray.map((assignment) => {
        return assignment.assignment
    });

    const difficultyArray = averageRatingArray.map((assignment) => {
        return assignment.difficulty
    });

    const enjoymentArray = averageRatingArray.map((assignment) => {
        return assignment.enjoyment
    }); 
    
    
    return (
        <div>
            <StudentFilter />
            <BarChart labels={labelArray} difficultyData={difficultyArray} enjoymentData={enjoymentArray} title={"Average Ratings of Students"} />
            <LineChart labels={labelArray} difficultyData={difficultyArray} enjoymentData={enjoymentArray} title={"Average Ratings given"}/>
        </div>
    )
}

export default ChartContainer;