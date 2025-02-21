import "./PageOne.css";
import { SidebarPageThree } from "./SidebarPageThree";
import { FooterEng } from "./FooterEng";
import BackImg from "../assets/Img/background.png";
import buttonBlue from "../assets/Background/ButtonBlue.png";
import buttonGold from "../assets/Background/GoldButton.png";
import buttonWhite from "../assets/Background/ButtonWhite.png";
import backButton from "../assets/Background/BackButton.png";
import StormWizard from "../assets/Video/StormWizardSudios.mp4"
import BoutiqueEtherea from "../assets/Video/Fashion.mp4"
import CompanhiaDoSono from "../assets/Video/CompanhiaDoSono.mp4"
import Border from "../assets/Background/CicleBorder.png"
import BorderTop from "../assets/Background/lineGold.jpg"

export const PageThreeEng = () => {
    const text = {
        0: 'Access the website',
        1: 'Access my GitHub for more'
    };
    const title = {
        one: 'Storm Wizard Studios Page',
        two: 'Netflix Clone Page',
        three: 'Boutique Etherea',
    }
    const content = {
        1: "I created the Storm Wizard Studios website to promote my games more professionally. Even though it's a static site, it's enough to keep players informed about the games' news. The site was built with React.js and Vite.js, and the visual design was created by me.",
        2: "The Netflix clone is a website I developed during my initial studies in HTML, CSS, and JavaScript. This project was part of a challenge proposed by the Digital Innovation One Bootcamp, where I took a series of courses and obtained several certificates. The original challenge was to recreate the first page after the client logs in. However, upon completion, I decided to challenge myself even further by creating the homepage and login form from scratch. As a beginner, I faced several challenges, with the main one being making the site responsive.",
        3: "Boutique Etherea is a project I started developing to practice and challenge my skills in front-end and back-end. The idea is to create a website where a client can display their clothing collections. Users will have access to the products showcased on the site and will be able to create a wishlist with their favorite items. The site features a display of the users' favorite pieces to help understand which items are the most sought after. The website is still incomplete, as it is a large-scale project and demands a lot from me to develop. As with any project in development, there may be some bugs that I am working to fix. For this project, I use Vue.js for the front-end, .Net for the back-end, and WampServer with DBeaver for the database. The front-end part is accessible because it is online, but information that depends on the back-end is unavailable since it runs locally."
    }
    const url = { 1: '', 2: '', 3: '' };
    url[0] = "https://stormwizardstudios.netlify.app";
    url[1] = "https://github.com/vitor7goncalves/Netflix-clone";
    url[2] = "https://boutiqueetherea.netlify.app";

    return (
        <>
            < SidebarPageThree />
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
                        <video className="video" src={StormWizard} muted autoPlay loop controls></video>
                    </div>
                    <div className="objs">
                        <img className="BorderTop" src={BorderTop} alt="Border" />
                        <div className="text">
                            <h2>{title.two}</h2>
                            <p>
                                {content[2]}
                            </p>
                        </div>
                        <a href={url[1]} className="blueButton ">
                            <img className="backgroundButton" src={backButton} alt="Background button" />
                            <img className="buttonImg" src={buttonBlue} alt="Button" />
                            <p>{text[1]}</p>
                        </a>
                        <img className="borderCicleLast" src={Border} alt="" />
                        <iframe className="youtube" src="https://www.youtube.com/embed/Bvrq5t6KX8s?si=cr0U5HJeJ9lJlCpu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className="objs">
                        <img className="BorderTop" src={BorderTop} alt="Border" />
                        <div className="text">
                            <h2>{title.three}</h2>
                            <p>
                                {content[3]}
                            </p>
                        </div>
                        <a href={url[2]} className="blueButton ">
                            <img className="backgroundButton" src={backButton} alt="Background button" />
                            <img className="buttonImg" src={buttonBlue} alt="Button" />
                            <p>{text[0]}</p>
                        </a>
                        <img className="borderCicleLast" src={Border} alt="" />
                        <video className="video" src={BoutiqueEtherea} muted autoPlay loop controls></video>
                    </div>
                </div>
                <div className="spaceBottomTwo"></div>
            </div>
            <FooterEng />
        </>
    );
}