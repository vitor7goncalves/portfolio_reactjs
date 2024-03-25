import "./Sidebar.css";
import logo from "../assets/logo.png";
import br from "../assets/br.jpg";
import eua from "../assets/eua.jpg";
import { Link } from "react-router-dom";

export const SidebarPageOne = () => {

    const urlHome = localStorage.getItem('urlHome');
    let lang = "";

    const handleChangeLanguage = (language) => {
        if (language === "/trabalhosparaterceiros") {
            lang = "/pt-br";
            localStorage.setItem('urlHome', lang);
        } else {
            lang = "/eng";
            localStorage.setItem('urlHome', lang);
        }
        window.location.href = language;
    };

    return (
        <>
            <div className="container">
                <div className="top-bar">
                    <div className="top-bar-soon">
                        <div className="top-bar-soon-content">
                            <p>E-mail: vitor7goncalves@outlook.com</p>
                            <Link to={urlHome}><img src={logo} className='logo' alt="" /></Link>
                        </div>
                        <div className='select'>
                            <button onClick={() => handleChangeLanguage('/trabalhosparaterceiros')}><img src={br} /></button>
                            <button onClick={() => handleChangeLanguage('/third-partyprojects')}><img src={eua} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}