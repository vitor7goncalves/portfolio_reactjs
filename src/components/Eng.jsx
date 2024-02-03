import "./Body.css";
import React, { useState, useEffect } from "react";

import me from "../assets/Photo/me.png"
import csharp from "../assets/Icon/C Sharp.png"
import photoshop from "../assets/Icon/photoshop.png"
import unity from "../assets/Icon/unity.png"
import javascript from "../assets/Icon/javascript.png"
import html from "../assets/Icon/html-5.png"
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

const imagePaths = [
    img00, img01, img02, img03, img04, img05, img06, img07, img08, img09,
    img10, img11, img12, img13, img14, img15, img16, img17, img18, img19,
    img20, img21, img22, img23, img24, img25, img26, img27, img28, img29,
    img30, img31, img32, img33, img34, img35, img36, img37, img38, img39,
    img40, img41, img42, img43, img44, img45, img46, img47, img48, img49,
    img50, img51, img52, img53, img54, img55, img56, img57
];


export const Eng = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    var textText = { 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '' };
    var languageText = { 0: '', 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '' };
    var buttonText;

    languageText[0] = "I've been developing with C Sharp for just over 2 year. However, the longest time was within Unity. But I have small projects on GitHub where I used this tool. And of course, every day I learn more because my studies with C Sharp don't stop.";
    languageText[1] = "Adobe photoshop is used to create digital art. The version I'm currently working on is 2019. All the art I created in my projects was 97% through Photoshop. As I said about myself, I migrated about 2 years ago to digital art. Because I spent my whole life drawing and painting in a conventional way";
    languageText[2] = "And to complete the front-end trio, I couldn't leave out the CSS. As well as Javascript and HTML, I've been studying CSS since September 2020. And along with the other technologies, I created some projects that are on my GitHub, and I also used them at Big2be.";
    languageText[3] = "The technology I use the most right now. With Unity I created and published my first game on Steam, Magus Pocus. Unity is a development engine that uses the C Sharp programming language, very common to create 2D and 3D games.";
    languageText[4] = "I've been learning about Javascript since September 2020. Despite focusing more on C# and Unity, I worked at a company located in Ribeirão Preto - SP called Big2be, using my knowledge and Javascript. Company specialized in e-commerce for supermarkets, restaurants and the like.";
    languageText[5] = "I've been studying and improving myself in HTML along with Javascript. And just like in JS, I used HTML in my personal projects and in the company mentioned above.";
    languageText[6] = "Magus Pocus is a 2D platform game. I created it a few months ago and it took 6 months for it to be completed. I developed it from scratch and all art and programming was done by me.";
    languageText[7] = "Paradise Beach are assets that contain some images for creating scenarios in games. Contains 3 variations of stems and coconut tree tops for you to combine and create different types of coconut trees, bushes, beach background, rocks and ground.";
    languageText[8] = "I recreated the Netflix page on Jan 7th. 2021, to improve my knowledge in Javascript, HTML and CSS. Access my GitHub if you want the source code.";
    languageText[9] = "A simple game that simulates dice scrolling made in Unity 2D. The game is open source and to use create a new project and replace the 'Assets' folder. Access my GitHub if you want the source code.";
    textText[1] = "Game developer and full-stack";
    textText[2] = "About me";
    textText[3] = "My name is Vitor Gonçalves Rodrigues, I was born in Rio de Janeiro on May 2, 1982, I live in Ribeirão Preto in the state of São Paulo. I'm a full-stack game developer. I worked at a startup that has an e-commerce project for 9 months. Today I work on game projects as a freelancer, one of them is a game called Kami Kaido for a studio located in Porto - Portugal, in addition to other projects that I mention on this site. I'm passionate about what I do, so much so that I consider it more of a hobby than a job.";
    textText[4] = "Features";
    textText[5] = "Projets";
    textText[6] = "Game I developed and sell on Steam";
    textText[7] = "Paradise Beach Assets for Games";
    textText[8] = "Netflix Clone";
    textText[9] = "Roll Dices Game";
    buttonText = "know more";

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
        }, 100);

        // Limpar o intervalo quando o componente for desmontado ou quando necessário
        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <body>
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
                                        {languageText[3]}
                                    </p>
                                </div>
                                <div className="itens">
                                    <img src={javascript} alt="javascript" className="icon" />
                                    <p className="text">
                                        {languageText[4]}
                                    </p>
                                </div>
                                <div className="itens">
                                    <img src={javascript} alt="javascript" className="icon" />
                                    <p className="text">
                                        {languageText[4]}
                                    </p>
                                </div>
                            </div>
                            <div className="Two">
                                <div className="itens">
                                    <img src={csharp} alt="csharp" className="icon" />
                                    <p className="text">
                                        {languageText[0]}
                                    </p>
                                </div>
                                <div className="itens">
                                    <img src={unity} alt="unity" className="icon" />
                                    <p className="text">
                                        {languageText[3]}
                                    </p>
                                </div>
                                <div className="itens">
                                    <img src={javascript} alt="javascript" className="icon" />
                                    <p className="text">
                                        {languageText[4]}
                                    </p>
                                </div>
                                <div className="itens">
                                    <img src={javascript} alt="javascript" className="icon" />
                                    <p className="text">
                                        {languageText[4]}
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
                            <a href="" className="card">
                                <h3>
                                    "Third-party Projects
                                </h3>
                                <img src={imagePaths[currentImageIndex]} alt="" />
                            </a>
                            <a href="" className="card">
                                <h3>
                                    Digital Games
                                </h3>
                                <img src={imagePaths[currentImageIndex]} alt="" />
                            </a>
                            <a href="" className="card">
                                <h3>
                                    My Projects
                                </h3>
                                <img src={imagePaths[currentImageIndex]} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </body>
        </>
    );
}
