import { Routes, Route } from "react-router-dom";
import Title from "./Components/Title";
import Game from "./Components/Game";

export default function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Title />} />
                <Route path="/game" element={<Game />} />
            </Routes>
        </div>
    );
  }  