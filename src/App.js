import { BrowserRouter, Route, Routes } from "react-router-dom";
import BasicNav from "./Navbars/BasicNav/BasicNav";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<BasicNav />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
