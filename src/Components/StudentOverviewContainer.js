import { useParams } from 'react-router-dom'

function StudentOverviewContainer() {
    const { studentName } = useParams();

    return (
        <h1>{studentName}</h1>
    )
}

export default StudentOverviewContainer;

//do calculations based on individual student data. Then import the charts + filter based on this student.