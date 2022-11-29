import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './StudentFilter.css';

function StudentFilter() {
    const evaluations = useSelector(state => state.students.evaluations);
    
    const studentNames = evaluations.map((student) => {
        return student.name
    });

    const filteredStudentNames = [...new Set(studentNames)].map((name, index) => {
        return {
            name: name,
            id: index + 1
        }
    });

    
    return (
        <div className="filter__container">
            <h2>Student Filter</h2>
            <p>Click on a student to see an overview of that student and their evaluations</p>
            <nav>
                {filteredStudentNames.map((student) => {
                    return (
                        <Link to={`/student/${student.name}`} key={student.id}>
                            <span>{student.name}</span>
                        </Link>
                    )
                })}
            </nav>     
        </div>   
    )
}

export default StudentFilter;

