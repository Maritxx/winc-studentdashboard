import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ChartContainer from './Components/ChartContainer';
import StudentOverviewContainer from './Components/StudentOverviewContainer';
import './App.css';

function App() {
    return (
        <div className="app__container">
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<ChartContainer />}
                    />
                    <Route 
                        path="/student/:studentName"
                        element={<StudentOverviewContainer />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
