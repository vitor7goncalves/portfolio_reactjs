import "./Header.css";
import BackImg from "../assets/Img/background.png";
import buttonBlue from "../assets/Background/ButtonBlue.png";
import buttonGold    from "../assets/Background/GoldButton.png";
import buttonWhite from "../assets/Background/ButtonWhite.png";
import backButton from "../assets/Background/BackButton.png";

export const HeaderPt = () => {
    var whatsapp = "https://wa.me/5516981050685";
    var text = { 1: '', 2: '', 3: '' };
    text[0] = "Sou desenvolvedor de jogos e full-stack";
    text[1] = "Vitor Gonçalves Rodrigues";
    text[2] = "Contato";

    return (
        <>
            <body>
                <div className="contentHeader">
                    <img src={BackImg} alt="Background" />
                    <div className="film"></div>
                    <div className="textContent">
                        <h1>
                            {text[0]}
                        </h1>
                        <h2>
                            {text[1]}
                        </h2>
                        <a href={whatsapp} className="goldButton">
                            <img src={backButton} alt="" />
                            <img className="buttonImg" src={buttonGold} alt="" />
                            <p>{text[2]}</p>
                        </a>
                    </div>
                </div>
            </body>
        </>
    );
}