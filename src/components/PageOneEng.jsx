import "./PageOne.css"
import { SidebarPageOne } from "./SidebarPageOne";
import { FooterEng } from "./FooterEng";
import BackImg from "../assets/Img/background.png";
import buttonBlue from "../assets/Background/ButtonBlue.png";
import buttonGold from "../assets/Background/GoldButton.png";
import buttonWhite from "../assets/Background/ButtonWhite.png";
import backButton from "../assets/Background/BackButton.png";
import OrfeuDigital from "../assets/Video/OrfeuDigital.mp4"
import Border from "../assets/Background/CicleBorder.png"
import BorderBottom from "../assets/Background/goldline2.jpg"

export const PageOneEng = () => {
    const text = "Access the website";
    const title = {
        one: 'Orfeu Digital Page',
    }
    const content = {
        1: "The Orfeu Digital page was developed using Vue.js and Vite.js. The idea here is to have just a static website to showcase Orfeu Digital's services to its clients, as this already met the company's needs. As part of the requirement was to be found by search engines, SEO concepts were applied. The visual design was created by Guilherme Gautério.",
    }
    const url = { 1: '', 2: '', 3: '' };
    url[0] = "https://orfeudigital.com";

    return (
        <>
            <SidebarPageOne />
            <div className="main">
                <div className="itemPagOne">
                    <div className="objs">
                        <div className="text">
                            <h2>{title.one}</h2>
                            <p>
                                {content[1]}
                            </p>
                            <a className="linkThird-party" href="https://www.instagram.com/guigaugui/">Instagram Guilherme Gautério: https://www.instagram.com/guigaugui/</a>
                        </div>
                        <a href={url[0]} className="goldButton">
                            <img src={backButton} alt="" />
                            <img className="buttonImg" src={buttonGold} alt="" />
                            <p>{text}</p>
                        </a>
                        <img className="borderCicle" src={ Border } alt="" />
                        <video className="video" src={ OrfeuDigital } muted autoPlay loop controls></video>
                        <img className="borderBottom" src={BorderBottom} alt="Border" />
                    </div>
                    <div className="objs">
                        <div className="text">
                            <h2>{title.one}</h2>
                            <p>
                                {content[1]}
                            </p>
                            <a className="linkThird-party" href="https://www.instagram.com/guigaugui/">Instagram Guilherme Gautério: https://www.instagram.com/guigaugui/</a>
                        </div>
                        <a href={url[0]} className="goldButton">
                            <img src={backButton} alt="" />
                            <img className="buttonImg" src={buttonGold} alt="" />
                            <p>{text}</p>
                        </a>
                        <img className="borderCicle" src={ Border } alt="" />
                        <video className="video" src={ OrfeuDigital } muted autoPlay loop controls></video>
                    </div>
                </div>
            </div>
            <FooterEng />
        </>
    );
}