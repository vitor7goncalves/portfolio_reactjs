import "./PageOne.css"
import { SidebarPageOne } from "./SidebarPageOne";
import { FooterPt } from "./FooterPt";
import BackImg from "../assets/Img/background.png";
import buttonBlue from "../assets/Background/ButtonBlue.png";
import buttonGold from "../assets/Background/GoldButton.png";
import buttonWhite from "../assets/Background/ButtonWhite.png";
import backButton from "../assets/Background/BackButton.png";
import OrfeuDigital from "../assets/Video/OrfeuDigital.mp4"
import CompanhiaDoSono from "../assets/Video/CompanhiaDoSono.mp4"
import Border from "../assets/Background/CicleBorder.png"
import BorderTop from "../assets/Background/lineGold.jpg"

export const PageOnePtBr = () => {
    const text = {
        0: 'Acesse o site',
        1: 'Site inacessível'
    };
    const title = {
        one: 'Site Orfeu Digital',
        two: 'Site Companhia do Sono',
    }
    const content = {
        1: "A página do Orfeu Digital foi desenvolvida usando Vue.js e Vite.js. A ideia aqui é ter apenas um site estático para mostrar os serviços do Orfeu Digital aos seus clientes, pois isso já atendia às necessidades da empresa. Como parte do requisito era ser encontrado pelos motores de busca, conceitos de SEO foram aplicados. O design visual foi criado por Guilherme Gautério.",
        2: "Companhia do Sono é uma distribuidora de colchões parceira da Ortobom. A ideia do site é criar uma vitrine de colchões em promoção, simples e direto ao ponto, atendendo às necessidades do cliente. Criei uma API e Banco de Dados para substituir imagens e editar textos. Uma área de login e outros fatores para garantir a segurança do site. E um pop-up para trocar dados do administrador no site. O frontend foi criado com Vue.js e Vite.js. O backend foi criado com DotNet (C#). Wampserver e DBeaver para o Banco de Dados. O design visual foi criado por Guilherme Gautério.",
    }
    const url = { 1: '', 2: '', 3: '' };
    url[0] = "https://orfeudigital.com";

    return (
        <>
            <SidebarPageOne />
            <div className="main">
                <div className="itemPagOne">
                    <div className="objs">
                        <img className="BorderTop" src={BorderTop} alt="Border" />
                        <div className="text">
                            <h2>{title.one}</h2>
                            <p>
                                {content[1]}
                            </p>
                            <a className="linkThird-party" href="https://www.instagram.com/guigaugui/">Instagram Guilherme Gautério: https://www.instagram.com/guigaugui/</a>
                        </div>
                        <a href={url[0]} className="blueButton ">
                            <img className="backgroundButton" src={backButton} alt="Background button" />
                            <img className="buttonImg" src={buttonBlue} alt="Button" />
                            <p>{text[0]}</p>
                        </a>
                        <img className="borderCicle" src={Border} alt="" />
                        <video className="video" src={OrfeuDigital} muted autoPlay loop controls></video>
                    </div>
                    <div className="objs">
                        <img className="BorderTop" src={BorderTop} alt="Border" />
                        <div className="text">
                            <h2>{title.two}</h2>
                            <p>
                                {content[2]}
                            </p>
                        </div>
                        <div className="blueButton">
                            <img className="backgroundButton" src={backButton} alt="Background button" />
                            <p>{text[1]}</p>
                        </div>
                        <img className="borderCicle" src={Border} alt="" />
                        <video className="video" src={CompanhiaDoSono} muted autoPlay loop controls></video>
                    </div>
                </div>
                <div className="spaceBottom"></div>
            </div>
            <FooterPt />
        </>
    );
}