import { Routes, Route } from "react-router-dom";
import { Eng } from "../components/Eng";
import { PtBr } from "../components/PtBr";
import { PageOneEng } from "./PageOneEng";
import { PageOnePtBr } from "./PageOnePtBr";

export const Rotiator = () => {
    return (
        <Routes>
            <Route path="/eng" element={<Eng />} />
            <Route path="/pt-br" element={<PtBr />} />
            <Route path="/third-partyprojects" element={<PageOneEng />} />
            <Route path="/trabalhosparaterceiros" element={<PageOnePtBr />} />
        </Routes>
    )
}

