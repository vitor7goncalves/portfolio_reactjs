import "./Eng.css";

import cape from "../assets/backgroud.png"
import me from "../assets/me.png"
import csharp from "../assets/C Sharp.png"
import photoshop from "../assets/photoshop.png"
import unity from "../assets/unity.png"
import html from "../assets/html-5.png"
import linkedin from "../assets/linkedin_icon_135436.png"

export const Eng = () => {

    var textText = { 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '' };
    var languageText = { 0: '', 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '' };
    var buttonText;

    languageText[0] = "I've been developing with C Sharp for just over 1 year. However, the longest time was within Unity. But I have small projects on GitHub where I used this tool. And of course, every day I learn more because my studies with C Sharp don't stop.";
    languageText[1] = "Adobe photoshop is used to create digital art. The version I'm currently working on is 2019. All the art I created in my projects was 97% through Photoshop. As I said about myself, I migrated about 2 years ago to digital art. Because I spent my whole life drawing and painting in a conventional way";
    languageText[2] = "And to complete the front-end trio, I couldn't leave out the CSS. As well as Javascript and HTML, I've been studying CSS since September 2020. And along with the other technologies, I created some projects that are on my GitHub, and I also used them at Big2be.";
    languageText[3] = "The technology I use the most right now. With Unity I created and published my first game on Steam, Magus Pocus. Unity is a development engine that uses the C Sharp programming language, very common to create 2D and 3D games.";
    languageText[4] = "I've been learning about Javascript since September 2020. Despite focusing more on C# and Unity, I worked at a company located in Ribeirão Preto - SP called Big2be, using my knowledge and Javascript. Company specialized in e-commerce for supermarkets, restaurants and the like.";
    languageText[5] = "I've been studying and improving myself in HTML along with Javascript. And just like in JS, I used HTML in my personal projects and in the company mentioned above.";
    languageText[6] = "Magus Pocus is a 2D platform game. I created it a few months ago and it took 6 months for it to be completed. I developed it from scratch and all art and programming was done by me.";
    languageText[7] = "Paradise Beach are assets that contain some images for creating scenarios in games. Contains 3 variations of stems and coconut tree tops for you to combine and create different types of coconut trees, bushes, beach background, rocks and ground.";
    languageText[8] = "I recreated the Netflix page on Jan 7th. 2021, to improve my knowledge in Javascript, HTML and CSS. Access my GitHub if you want the source code.";
    languageText[9] = "A simple game that simulates dice scrolling made in Unity 2D. The game is open source and to use create a new project and replace the 'Assets' folder. Access my GitHub if you want the source code.";
    textText[1] = "Game developer and digital designer";
    textText[2] = "About me";
    textText[3] = "My name is Vitor Gonçalves Rodrigues, I was born in Rio de Janeiro on May 2, 1982, I live in Ribeirão Preto in the state of São Paulo. I'm a developer and game designer. A little over 2 years ago I decided to migrate to digital art. I worked in a startup that has an e-commerce project for 9 months. Today I work on game projects as a freelance, one of them is a game called Kami Kaido for a studio located in Porto - Portugal. Also I'm creating and selling assets on the Unity Assets Store. I am passionate about what I do, so much so that I consider it a hobby rather than a job..";
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
                <header>
                    <div className="img-wrapper">
                        <img src={cape} alt="" />
                    </div>
                    <div className="banner">
                        <h1 id="t1">{textText[1]}</h1>
                        <p>Vitor Gonçalves Rodrigues</p>
                    </div>
                </header>
                <div className="sessao-header-about-me">
                    <h1 id="t2">{textText[2]}</h1>
                </div>
                <div className="about-me-sessao">
                    <div className="about-me-filho">
                        <img src={me} className='me' />
                        <div className="conhecimento-text">
                            <p id="t3" className="about-me-text">{textText[3]}</p>
                        </div>
                    </div>
                    <section className="sessao-conhecimentos">
                        <div className="sessao-header">
                            <h1 id="t4">{textText[4]}</h1>
                        </div>
                        <div className="features-area">
                            <div className="conhecimentos">
                                <div className="coluna1">
                                    <div className="conhecimento">
                                        <div className="conhecimento-header">
                                            <img src={csharp} alt="" />
                                            <h3>C Sharp</h3>
                                        </div>
                                        <div className="conhecimento-text">
                                            <p className="p-0">{languageText[0]}</p>
                                        </div>
                                    </div>
                                    <div className="conhecimento">
                                        <div className="conhecimento-header">
                                            <img src={photoshop} alt="" />
                                            <h3>Adobe Photoshop</h3>
                                        </div>
                                        <div className="conhecimento-text">
                                            <p className="p-1">{languageText[1]}</p>
                                        </div>
                                    </div>
                                    <div className="conhecimento">
                                        <div className="conhecimento-header">
                                            <i className="fab fa-css3-alt"></i>
                                            <h3>CSS</h3>
                                        </div>
                                        <div className="conhecimento-text">
                                            <p className="p-2">{languageText[2]}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="coluna2">
                                    <div className="conhecimento">
                                        <div className="conhecimento-header">
                                            <img src={unity} alt="" />
                                            <h3>Unity</h3>
                                        </div>
                                        <div className="conhecimento-text">
                                            <p className="p-3">{languageText[3]}</p>
                                        </div>
                                    </div>
                                    <div className="conhecimento">
                                        <div className="conhecimento-header">
                                            <i className="fab fa-js"></i>
                                            <h3>Javascript</h3>
                                        </div>
                                        <div className="conhecimento-text">
                                            <p className="p-4">{languageText[4]}</p>
                                        </div>
                                    </div>
                                    <div className="conhecimento">
                                        <div className="conhecimento-header">
                                            <img src={html} alt="" />
                                            <h3>HTML</h3>
                                        </div>
                                        <div className="conhecimento-text">
                                            <p className="p-5">{languageText[5]}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="conhecimento-img-wrapper">
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="sessao-projetos">
                        <div className="sessao-header-card">
                            <h1 id="t5">{textText[5]}</h1>
                        </div>
                        <div className="section-project">
                            <div className="projets-video">
                                <iframe className="video-sessao1" src="https://www.youtube.com/embed/2Op61l0WatY"></iframe>
                                <div className="project-text">
                                    <h3 id="t6">{textText[6]}</h3>
                                    <p className="p-6">{languageText[6]}</p>
                                    <a href="https://store.steampowered.com/app/2101760/Magus_Pocus/" className="button-link" id="button0">{buttonText}</a>
                                </div>
                            </div>
                        </div>
                        <div className="section-project">
                            <div className="projets-video">
                                <iframe className="video-sessao2" src="https://www.youtube.com/embed/QX8sv36jnLg"></iframe>
                                <div className="project-text">
                                    <h3 id="t7">{textText[7]}</h3>
                                    <p className="p-7">{languageText[7]}</p>
                                    <a href="https://assetstore.unity.com/publishers/78812?preview=1" className="button-link" id="button1">{buttonText}</a>
                                </div>
                            </div>
                        </div>
                        <div className="section-project">
                            <div className="projets-video">
                                <iframe className="video-sessao3" src="https://www.youtube.com/embed/Bvrq5t6KX8s"></iframe>
                                <div className="project-text">
                                    <h3 id="t8">{textText[8]}</h3>
                                    <p className="p-8">{languageText[8]}</p>
                                    <a href="https://github.com/vitor7goncalves/Netflix-clone" className="button-link" id="button2">{buttonText}</a>
                                </div>
                            </div>
                        </div>
                        <div className="section-project">
                            <div className="projets-video">
                                <iframe className="video-sessao4" src="https://www.youtube.com/embed/wisCyF4aJws"></iframe>
                                <div className="project-text">
                                    <h3 id="t9">{textText[9]}</h3>
                                    <p className="p-9">{languageText[9]}</p>
                                    <a href="https://github.com/vitor7goncalves/Dices" className="button-link" id="button3">{buttonText}</a>
                                </div>
                            </div>
                        </div>
                        <div className="social-media">
                            <a href="https://www.facebook.com/sillenyus.vitor/"><i className="fab fa-facebook-square"></i></a>
                            <a href="https://github.com/vitor7goncalves"><i className="fab fa-github-square"></i></a>
                            <a href="https://www.instagram.com/goncalvesvitor7/"><i className="fab fa-instagram-square"></i></a>
                            <a href="https://www.linkedin.com/in/vitor-gon%C3%A7alves-rodrigues-1aa9b4110/"><img src={linkedin} alt="" /></a>
                        </div>
                    </section>
                    <footer className="session-footer">
                        <h3>
                            &copy; Vitor7Goncalves - This page was developed with React.js
                        </h3>
                    </footer>
                </div>
            </body>
        </>
    );
}
