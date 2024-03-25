import "./Body.css";
import React, { useState, useEffect } from "react";
import { Sidebar } from "./Sidebar";
import { FooterEng } from "./FooterEng"
import { HeaderEng } from "./HeaderEng";

import me from "../assets/Photo/me.png"
import csharp from "../assets/Icon/C Sharp.png"
import git from "../assets/Icon/git.png"
import unity from "../assets/Icon/unity.png"
import javascript from "../assets/Icon/javascript.png"
import html from "../assets/Icon/html-5.png"
import css from "../assets/Icon/css.png"
import vue from "../assets/Icon/vue.png"
import react from "../assets/Icon/react.png"
import blender from "../assets/Icon/blender.png"
import sql from "../assets/Icon/sql.png"
import img00 from "../assets/Background/Anim/quadro0000.png";
import img01 from "../assets/Background/Anim/quadro0001.png";
import img02 from "../assets/Background/Anim/quadro0002.png";
import img03 from "../assets/Background/Anim/quadro0003.png";
import img04 from "../assets/Background/Anim/quadro0004.png";
import img05 from "../assets/Background/Anim/quadro0005.png";
import img06 from "../assets/Background/Anim/quadro0006.png";
import img07 from "../assets/Background/Anim/quadro0007.png";
import img08 from "../assets/Background/Anim/quadro0008.png";
import img09 from "../assets/Background/Anim/quadro0009.png";
import img10 from "../assets/Background/Anim/quadro0010.png";
import img11 from "../assets/Background/Anim/quadro0011.png";
import img12 from "../assets/Background/Anim/quadro0012.png";
import img13 from "../assets/Background/Anim/quadro0013.png";
import img14 from "../assets/Background/Anim/quadro0014.png";
import img15 from "../assets/Background/Anim/quadro0015.png";
import img16 from "../assets/Background/Anim/quadro0016.png";
import img17 from "../assets/Background/Anim/quadro0017.png";
import img18 from "../assets/Background/Anim/quadro0018.png";
import img19 from "../assets/Background/Anim/quadro0019.png";
import img20 from "../assets/Background/Anim/quadro0020.png";
import img21 from "../assets/Background/Anim/quadro0021.png";
import img22 from "../assets/Background/Anim/quadro0022.png";
import img23 from "../assets/Background/Anim/quadro0023.png";
import img24 from "../assets/Background/Anim/quadro0024.png";
import img25 from "../assets/Background/Anim/quadro0025.png";
import img26 from "../assets/Background/Anim/quadro0026.png";
import img27 from "../assets/Background/Anim/quadro0027.png";
import img28 from "../assets/Background/Anim/quadro0028.png";
import img29 from "../assets/Background/Anim/quadro0029.png";
import img30 from "../assets/Background/Anim/quadro0030.png";
import img31 from "../assets/Background/Anim/quadro0031.png";
import img32 from "../assets/Background/Anim/quadro0032.png";
import img33 from "../assets/Background/Anim/quadro0033.png";
import img34 from "../assets/Background/Anim/quadro0034.png";
import img35 from "../assets/Background/Anim/quadro0035.png";
import img36 from "../assets/Background/Anim/quadro0036.png";
import img37 from "../assets/Background/Anim/quadro0037.png";
import img38 from "../assets/Background/Anim/quadro0038.png";
import img39 from "../assets/Background/Anim/quadro0039.png";
import img40 from "../assets/Background/Anim/quadro0040.png";
import img41 from "../assets/Background/Anim/quadro0041.png";
import img42 from "../assets/Background/Anim/quadro0042.png";
import img43 from "../assets/Background/Anim/quadro0043.png";
import img44 from "../assets/Background/Anim/quadro0044.png";
import img45 from "../assets/Background/Anim/quadro0045.png";
import img46 from "../assets/Background/Anim/quadro0046.png";
import img47 from "../assets/Background/Anim/quadro0047.png";
import img48 from "../assets/Background/Anim/quadro0048.png";
import img49 from "../assets/Background/Anim/quadro0049.png";
import img50 from "../assets/Background/Anim/quadro0050.png";
import img51 from "../assets/Background/Anim/quadro0051.png";
import img52 from "../assets/Background/Anim/quadro0052.png";
import img53 from "../assets/Background/Anim/quadro0053.png";
import img54 from "../assets/Background/Anim/quadro0054.png";
import img55 from "../assets/Background/Anim/quadro0055.png";
import img56 from "../assets/Background/Anim/quadro0056.png";
import img57 from "../assets/Background/Anim/quadro0057.png";

import game00 from "../assets/Background/Anim2/game0000.png";
import game01 from "../assets/Background/Anim2/game0001.png";
import game02 from "../assets/Background/Anim2/game0002.png";
import game03 from "../assets/Background/Anim2/game0003.png";

const imagePaths = [
    img00, img01, img02, img03, img04, img05, img06, img07, img08, img09,
    img10, img11, img12, img13, img14, img15, img16, img17, img18, img19,
    img20, img21, img22, img23, img24, img25, img26, img27, img28, img29,
    img30, img31, img32, img33, img34, img35, img36, img37, img38, img39,
    img40, img41, img42, img43, img44, img45, img46, img47, img48, img49,
    img50, img51, img52, img53, img54, img55, img56, img57
];

const gamePaths = [
    game00, game01, game02, game03
];


export const Eng = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentImageIndexGame, setCurrentImageIndexGame] = useState(0);

    var textText = { 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '' };
    var languageText = { 0: '', 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '' };
    var buttonText;

    languageText[0] = "I have been developing with CSharp for a little over 2 years. However, the majority of that time was within Unity. I also have some small projects on GitHub where I used this tool. And of course, every day I learn more, because my studies with C# do not stop.";
    languageText[1] = "All of my games and freelance game projects were made using Unity. Just like with CSharp, I started using Unity a little over 2 years ago. Initially with Unity 2D, and now I have explored Unity 3D quite a bit.";
    languageText[2] = "Although I'm not an expert in GitHub, everything I have learned and use is enough to work in a team and keep my projects versioned. If I need to, for some reason, recover a previous version of my projects, I am able to do so.";
    languageText[3] = "I started learning Javascript in 2021. Despite focusing more on C# and Unity, I worked at a company located in Ribeirão Preto - SP called Big2be, using my Javascript knowledge. This company specializes in e-commerce for supermarkets, restaurants, and similar businesses.";
    languageText[4] = "My studies in HTML started along with Javascript. Just like with JS, I used HTML in my personal projects and at the aforementioned company.";
    languageText[5] = "And to complete the front-end trio, I couldn't leave out CSS. In addition to Javascript and HTML, I have been studying CSS since 2021. Along with the other technologies, I have created some projects that are on my GitHub and also used them at Big2be.";
    languageText[6] = "Vue.js is an open-source JavaScript framework. My professional experience with this framework began in June 2023. Currently, I am working on some freelance projects for a company called Orfeu Digital.";
    languageText[7] = "React.js is a JavaScript framework that was created by Meta (formerly known as Facebook) and is maintained by it and by the community of developers worldwide. Unlike Vue.js, my experience with React is much more focused on studies, which I started in August 2023. In fact, this website was developed in React.js.";
    languageText[8] = "My experience with SQL started in November 2021 at the company Big2be. Although a few years have passed, this technology is the one I practice the least in my projects. Currently, I use it in my projects at Orfeu Digital.";
    languageText[9] = "On March 10, 2024, I started studying Blender. To deepen my knowledge in 3D game development, I started studying and practicing 3D modeling. In order to save money on my personal projects, I create the 3D objects I use in the games I develop myself.";

    textText[1] = "Game developer and full-stack";
    textText[2] = "About me";
    textText[3] = "Hello, I'm Vitor Gonçalves Rodrigues, a game developer and full-stack enthusiast. Born in Rio de Janeiro in 1982, currently residing in Ribeirão Preto, SP. My passion for programming began in 2016 during my Computer Engineering studies. Since 2018, I've been exploring Unity and CSharp, dedicated to turning creative ideas into interactive and engaging experiences. Discover more about my work by exploring the portfolio.";
    textText[4] = "Features";
    textText[5] = "Projets";
    textText[6] = "Game I developed and sell on Steam";
    textText[7] = "Paradise Beach Assets for Games";
    textText[8] = "Netflix Clone";
    textText[9] = "Roll Dices Game";
    buttonText = "know more";

    if ( window.location.href === "/")
        window.location.href = "/eng"

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
        }, 100);

        // Limpar o intervalo quando o componente for desmontado ou quando necessário
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {

        const intervalIdGame = setInterval(() => {
            setCurrentImageIndexGame((prevIndex) => (prevIndex + 1) % gamePaths.length);
        }, 900);

        return () => clearInterval(intervalIdGame);
    }, []);

    return (
        <>
            <Sidebar />
            <HeaderEng />
            <div>
                <div className="contentBody">
                    <div className="About">
                        <div className="aboutImg">
                            <img src={me} alt="Me" />
                        </div>
                        <div className="aboutText">
                            <div className="aboutTitle">
                                <h2>{textText[2]}</h2>
                            </div>
                            <div className="aboutP">
                                <p>
                                    {textText[3]}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="firstArea">
                        <div className="titleFirst">
                            <h2>{textText[4]}</h2>
                        </div>
                        <div className="contentFirstArea">
                            <div className="One">
                                <div className="itens">
                                    <img src={csharp} alt="csharp" className="icon" />
                                    <p className="text">
                                        {languageText[0]}
                                    </p>
                                </div>
                                <div className="itens">
                                    <img src={unity} alt="unity" className="icon" />
                                    <p className="text">
                                        {languageText[1]}
                                    </p>
                                </div>
                                <div className="itens">
                                    <img src={git} alt="javascript" className="icon" />
                                    <p className="text">
                                        {languageText[2]}
                                    </p>
                                </div>
                                <div className="itens">
                                    <img src={javascript} alt="javascript" className="icon" />
                                    <p className="text">
                                        {languageText[3]}
                                    </p>
                                </div>
                                <div className="itens">
                                    <img src={html} alt="csharp" className="icon" />
                                    <p className="text">
                                        {languageText[4]}
                                    </p>
                                </div>
                            </div>
                            <div className="Two">
                                <div className="itens">
                                    <img src={css} alt="unity" className="icon" />
                                    <p className="text">
                                        {languageText[5]}
                                    </p>
                                </div>
                                <div className="itens">
                                    <img src={vue} alt="javascript" className="icon" />
                                    <p className="text">
                                        {languageText[6]}
                                    </p>
                                </div>
                                <div className="itens">
                                    <img src={react} alt="javascript" className="icon" />
                                    <p className="text">
                                        {languageText[7]}
                                    </p>
                                </div>
                                <div className="itens">
                                    <img src={sql} alt="javascript" className="icon" />
                                    <p className="text">
                                        {languageText[8]}
                                    </p>
                                </div>
                                <div className="itens">
                                    <img src={blender} alt="javascript" className="icon" />
                                    <p className="text">
                                        {languageText[9]}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="secondArea">
                        <h2>
                            Projects
                        </h2>
                        <div className="cards">
                            <div className="capsuleCard">
                                <a href="/third-partyprojects" className="card">
                                    <h3>
                                        Third-party Projects
                                    </h3>
                                    <img src={imagePaths[currentImageIndex]} alt="" />
                                </a>
                            </div>
                            <div className="capsuleCard">
                                <a href="" className="card">
                                    <h3>
                                        Digital Games
                                    </h3>
                                    <img src={gamePaths[currentImageIndexGame]} alt="" />
                                </a>
                            </div>
                            <div className="capsuleCard">
                                <a href="" className="card">
                                    <h3>
                                        My Projects
                                    </h3>
                                    <img src={imagePaths[currentImageIndex]} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterEng />
        </>
    );
}
