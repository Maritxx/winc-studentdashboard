import { useSelector, useDispatch } from "react-redux";

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
    
    return (
        <h2>Hello</h2>
    )
}

export default ChartContainer;