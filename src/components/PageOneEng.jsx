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
import BorderTop from "../assets/Background/lineGold.jpg"

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
                            <p>{text}</p>
                        </a>
                        <img className="borderCicle" src={Border} alt="" />
                        <video className="video" src={OrfeuDigital} muted autoPlay loop controls></video>
                    </div>
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
                            <p>{text}</p>
                        </a>
                        <img className="borderCicle" src={Border} alt="" />
                        <video className="video" src={OrfeuDigital} muted autoPlay loop controls></video>
                    </div>
                </div>
                <div className="spaceBottom"></div>
            </div>
            <FooterEng />
        </>
    );
}