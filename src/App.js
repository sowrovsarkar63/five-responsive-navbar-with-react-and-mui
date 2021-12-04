import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Experiments from "./ExperimentMui/Experiments";
import BasicNav from "./Navbars/BasicNav/BasicNav";

function App() {
    return (
        <>
            <BrowserRouter>
                <Link to="/experiment">Experiment</Link>
                <br />
                <br />
                <Routes>
                    <Route path="/" element={<BasicNav />} />
                    <Route path="/experiment" element={<Experiments />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
