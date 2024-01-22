import { useState } from "react";
import "./Sidebar.css";
import logo from "../assets/logo.png";
import br from "../assets/br.jpg";
import eua from "../assets/eua.jpg";
import { Eng } from "./Eng";
import { PtBr } from "./PtBr";
import { FooterEng } from "./FooterEng";
import { FooterPt } from "./FooterPt";
import { HeaderEng } from "./HeaderEng";
import { HeaderPt } from "./HeaderPt";

export const Sidebar = () => {
    const [language, setLanguage] = useState("Eng");
    const [url, useUrl] = useState("Eng");

    return (
        <>
            <div className="container">
                <div className="top-bar">
                    <div className="top-bar-soon">
                        <div className="top-bar-soon-content">
                            <p>E-mail: me@vitor7goncalves.gq</p>
                            <img src={logo} className='logo' alt="" />
                        </div>
                        <div className='select'>
                            <button onClick={() => setLanguage("Pt-Br")}><img src={br} /></button>
                            <button onClick={() => setLanguage("Eng")}><img src={eua} /></button>
                        </div>
                    </div>
                </div>
                {language === "Eng" ? <HeaderEng /> : <HeaderPt />}
                {language === "Eng" ? <Eng /> : <PtBr />}
                {language === "Eng" ? <FooterEng /> : <FooterPt />}
            </div>
        </>
    );
}