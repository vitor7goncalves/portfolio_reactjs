import { useState } from "react";
import "./Header.css";
import logo from "../assets/logo.png";
import br from "../assets/br.jpg";
import eua from "../assets/eua.jpg";
import { Eng } from "./eng";
import { PtBr } from "./PtBr";

export const Header = () => {
    const [language, setLanguage] = useState("Eng");
    const [url, useUrl]  = useState("Eng");

    return (
        <>
            <div className="container">
                <div className="top-bar">
                    <div className="top-bar-soon">
                        <img src={logo} className='logo' alt="" />
                        <p>E-mail: me@vitor7goncalves.gq</p>
                    </div>
                    <div className='select'>
                        <button onClick={() => setLanguage("Pt-Br")}><img src={br} /></button>
                        <button onClick={() => setLanguage("Eng")}><img src={eua} /></button>
                    </div>
                </div>
                {language === "Eng" ? <Eng /> : <PtBr />}
            </div>
        </>
    )
}