import { Routes, Route } from "react-router-dom";
import { Eng } from "../components/Eng";
import { PtBr } from "../components/PtBr";
import { Sidebar } from "./Sidebar";

export const Rotiator = () => {
    return (
        <Routes>
            <Route path="/" element={<Eng />} />
            <Route path="/eng" element={<Eng />} />
            <Route path="/pt-br" element={<PtBr />} />
        </Routes>
    )
}

