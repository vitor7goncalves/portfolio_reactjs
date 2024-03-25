import "./PageOne.css"
import { SidebarPageOne } from "./SidebarPageOne";
import { FooterEng } from "./FooterEng";
import BackImg from "../assets/Img/background.png";
import buttonBlue from "../assets/Background/ButtonBlue.png";
import buttonGold from "../assets/Background/GoldButton.png";
import buttonWhite from "../assets/Background/ButtonWhite.png";
import backButton from "../assets/Background/BackButton.png";

export const PageOneEng = () => {
    const text = "Learn more";
    const url = { 1: '', 2: '', 3: '' };
    url[0] = "https://store.steampowered.com/app/2101760/Magus_Pocus/?l=portuguese";

    return (
        <>
            <SidebarPageOne />
            <div className="main">
                <div className="itemOne">
                    <div className="objs">
                        <div className="text">
                            <p>
                                asdasdaSDASDFASDFASDFASDFASdfasdfasdfsadfsadf
                                asdasdasdasdasdasdasdasdasdasdasdasdasdasdasda
                                asdasdaSDASDFASDFASDFASDFASdfasdfasdfsadfsadf
                                asdasdasdasdasdasdasdasdasdasdasdasdasdasdasda
                            </p>
                        </div>
                        <a href={url[0]} className="goldButton">
                            <img src={backButton} alt="" />
                            <img className="buttonImg" src={buttonGold} alt="" />
                            <p>{text}</p>
                        </a>
                    </div>
                </div>
            </div>
            <FooterEng />
        </>
    );
}