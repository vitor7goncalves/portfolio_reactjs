import "./Body.css";

import me from "../assets/Photo/me.png"
import csharp from "../assets/Icon/C Sharp.png"
import photoshop from "../assets/Icon/photoshop.png"
import unity from "../assets/Icon/unity.png"
import javascript from "../assets/Icon/javascript.png"
import html from "../assets/Icon/html-5.png"


export const Eng = () => {

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
                </div>
            </body>
        </>
    );
}
