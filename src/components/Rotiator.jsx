import { Routes, Route, Navigate } from "react-router-dom";
import { Eng } from "../components/Eng";
import { PtBr } from "../components/PtBr";
import { PageOneEng } from "./PageOneEng";
import { PageOnePtBr } from "./PageOnePtBr";
import { PageTwoEng } from "./PageTwoEng";
import { PageTwoPtBr } from "./PageTwoPtBr";
import { PageThreeEng } from "./PageThreeEng";
import { PageThreePtBr } from "./PageThreePtBr";

export const Rotiator = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/eng" />} />
            <Route path="/eng" element={<Eng />} />
            <Route path="/pt-br" element={<PtBr />} />
            <Route path="/third-partyprojects" element={<PageOneEng />} />
            <Route path="/trabalhosparaterceiros" element={<PageOnePtBr />} />
            <Route path="/digitalgames" element={<PageTwoEng />} />
            <Route path="/jogosdigitais" element={<PageTwoPtBr />} />
            <Route path="/meusprojetos" element={<PageThreePtBr />} />
            <Route path="/myprojects" element={<PageThreeEng />} />
        </Routes>
    )
}

