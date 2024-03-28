import "./PageOne.css";
import { SidebarPageTwo } from "./SidebarPageTwo";
import { FooterEng } from "./FooterEng";
import BackImg from "../assets/Img/background.png";
import buttonBlue from "../assets/Background/ButtonBlue.png";
import buttonGold from "../assets/Background/GoldButton.png";
import buttonWhite from "../assets/Background/ButtonWhite.png";
import backButton from "../assets/Background/BackButton.png";
import OrfeuDigital from "../assets/Video/OrfeuDigital.mp4"
import CompanhiaDoSono from "../assets/Video/CompanhiaDoSono.mp4"
import Border from "../assets/Background/CicleBorder.png"
import BorderTop from "../assets/Background/lineGold.jpg"

export const PageTwoEng = () => {
    const text = {
        0: 'Go to Steam',
        1: 'Inaccessible ',
        2: 'Go to the page'
    };
    const title = {
        one: 'Magus Pocus - 2D Platformer Game',
        two: 'Magus Pocus: Arcane Essence - 2D RPG Adventure',
        three: 'Magus Pocus: 3D Edition',
        four: 'Kami Kaido'
    }
    const content = {
        1: "A game I developed using Unity 2D (a platform for developing electronic games that utilizes the C# programming language). Currently, the game is available for sale on Steam.",
        2: "A new version of Magus Pocus being developed with Unity 2D. Unlike the previous version, which is a simple platformer, Magus Pocus: Arcane Essence will be an RPG game with more complex mechanics and greater challenges.",
        3: "A version of Magus Pocus, but in 3D, currently being developed with Unity 3D. I'm still unsure whether it will be a full-fledged game or merely a demonstration to hone my skills with Unity 3D and Blender, as I've personally created the 3D objects in this scene.",
        4: "Kami Kaido is a 2D game based on Loop Hero, but with a feudal Japanese theme. The game belongs to a studio called Black Mamba Games. I was hired as a freelancer to lead the team that developed the exploration and combat map. The game is developed using Unity 2D. The assets were created by MandyDebussy and Marina Yamamoto.",
    }
    const url = { 1: '', 2: '', 3: '' };
    url[0] = "https://store.steampowered.com/app/2101760/Magus_Pocus/";

    return (
        <>
            < SidebarPageTwo />
            <div className="main">
                <div className="itemPagOne">
                    <div className="objs">
                        <img className="BorderTop" src={BorderTop} alt="Border" />
                        <div className="text">
                            <h2>{title.one}</h2>
                            <p>
                                {content[1]}
                            </p>
                        </div>
                        <a href={url[0]} className="blueButton ">
                            <img className="backgroundButton" src={backButton} alt="Background button" />
                            <img className="buttonImg" src={buttonBlue} alt="Button" />
                            <p>{text[0]}</p>
                        </a>
                        <img className="borderCicle" src={Border} alt="" />
                        <iframe className="youtube" src="https://www.youtube.com/embed/GHd0ytVzhhQ?si=qAeHzCbzKDEQlEi-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className="objs">
                        <img className="BorderTop" src={BorderTop} alt="Border" />
                        <div className="text">
                            <h2>{title.two}</h2>
                            <p>
                                {content[2]}
                            </p>
                        </div>
                        <a href={url[0]} className="blueButton ">
                            <img className="backgroundButton" src={backButton} alt="Background button" />
                            <img className="buttonImg" src={buttonBlue} alt="Button" />
                            <p>{text[0]}</p>
                        </a>
                        <img className="borderCicle" src={Border} alt="" />
                        <iframe className="youtube" src="https://www.youtube.com/embed/78GoFuk-6p0?si=eSDgd8wPFcYABhY-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className="objs">
                        <img className="BorderTop" src={BorderTop} alt="Border" />
                        <div className="text">
                            <h2>{title.three}</h2>
                            <p>
                                {content[3]}
                            </p>
                        </div>
                        <div className="blueButton ">
                            <img className="backgroundButton" src={backButton} alt="Background button" />
                            <p>{text[1]}</p>
                        </div>
                        <img className="borderCicle" src={Border} alt="" />
                        <iframe className="youtube" src="https://www.youtube.com/embed/QknkOS5koXI?si=ewSOrIC4k_6ZRKOy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className="objs">
                        <img className="BorderTop" src={BorderTop} alt="Border" />
                        <div className="text">
                            <h2>{title.four}</h2>
                            <p>
                                {content[4]}
                            </p>
                        </div>
                        <a className="linkThird-party" href="https://mary99.myportfolio.com/">Marina Yamamoto's website: https://mary99.myportfolio.com/</a>
                        <a className="linkThird-party" href="https://www.instagram.com/debussy_art/">MandyDeBussy's Instagram: https://www.instagram.com/debussy_art/</a>
                        <a href={url[1]} className="blueButton ">
                            <img className="backgroundButton" src={backButton} alt="Background button" />
                            <img className="buttonImg" src={buttonBlue} alt="Button" />
                            <p>{text[2]}</p>
                        </a>
                        <img className="borderCicleLast" src={Border} alt="" />
                        <iframe className="youtube" src="https://www.youtube.com/embed/XTRIu9mwn4c?si=s7wuuuPtk8B4yAv6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
                <div className="spaceBottomTwo"></div>
            </div>
            <FooterEng />
        </>
    );
}