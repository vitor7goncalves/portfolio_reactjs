import "./Footer.css";
import img from "../assets/Background/bk1.png";
import github from "../assets/Icon/github.png"
import instagram from "../assets/Icon/instagram.png"
import facebook from "../assets/Icon/facebook.png"
import linkedin from "../assets/Icon/linkedin.png"

export const FooterEng = () => {
    var text = "© 2024 Vitor7Goncalves. This page was created with Vite.js and React.js";
    var email = "E-mail: vitor7goncalves@outlook.com";
    var follow = "Follow me";
    var social = { 1: '', 2: '', 3: '', 4: '' };

    social[0] = "https://www.facebook.com/sillenyus.vitor";
    social[1] = "https://github.com/vitor7goncalves";
    social[2] = "https://www.instagram.com/goncalvesvitor7/";
    social[3] = "https://www.linkedin.com/in/vitor-gonçalves-rodrigues-1aa9b4110/";

    return (
        <>
            <body>
                <div className="contentFooter">
                    <img src={img} alt="background footer" className="backgroundFooter" />
                    <div className="mediaContent">
                        <div className="mediaTittle">
                            <h2>{follow}</h2>
                        </div>
                        <div className="socialMedia">
                            <div className="Icons">
                                <a href={social[0]}><img src={facebook} alt="facebook" /></a>
                            </div>
                            <div className="Icons">
                                <a href={social[2]}><img src={github} alt="github" /></a>
                            </div>
                            <div className="Icons">
                                <a href={social[3]}><img src={instagram} alt="instagram" /></a>
                            </div>
                            <div className="Icons">
                                <a href={social[4]}><img src={linkedin} alt="linkedin" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="others">
                        <div className="footerEmail">
                            <h4>{email}</h4>
                        </div>
                        <div className="footerText">
                            <h4>{text}</h4>
                        </div>
                    </div>
                </div>
            </body>
        </>
    );
}