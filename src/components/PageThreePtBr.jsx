import "./PageOne.css"
import { SidebarPageThree } from "./SidebarPageThree";
import { FooterPt } from "./FooterPt";
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

export const PageThreePtBr = () => {
    const text = {
        0: 'Acesse o site',
        1: 'Acesse o meu Github para mais'
    };
    const title = {
        one: 'Site Storm Wizard Studios',
        two: 'Site Netflix Clone',
        three: 'Boutique Etherea',
    }
    const content = {
        1: "Eu criei o site Storm Wizard Studios para divulgar meus jogos de forma mais profissional. Mesmo sendo um site estatico é o suficiente para deixar os jogares informados das novidades dos jogos. O site foi criado com React.js e Vite.js e o visual design foi criado por mim.",
        2: "O Netflix clone é um site que desenvolvi durante meus estudos iniciais em HTML, CSS e JavaScript. Este projeto foi parte de um desafio proposto pelo Bootcamp Digital Innovation One, onde participei de uma série de cursos e obtive vários certificados. O desafio original era recriar a primeira página após o cliente efetuar o login. No entanto, após a conclusão, decidi me desafiar ainda mais, criando a página inicial e o formulário de login do zero. Como iniciante, enfrentei diversos desafios, sendo o principal deles tornar o site responsivo.",
        3: "Boutique Etherea é um projeto que comecei a desenvolver para praticar e desafiar meus conhecimentos em front-end e back-end. A ideia é criar um site onde um cliente possa exibir suas coleções de roupas. Os usuários terão acesso aos produtos exibidos no site e poderão criar uma lista de desejos com as peças que mais gostaram. O site conta com uma exibição das peças favoritas dos usuários para ajudar a entender quais são as mais procuradas. O site ainda está incompleto, já que é um projeto de grande porte e exige muito de mim para desenvolvê-lo. Como em todo projeto em desenvolvimento, podem existir alguns bugs que estou trabalhando para corrigir. Para este projeto, utilizo Vue.js para o front-end, .Net para o back-end e WampServer com DBeaver para o banco de dados. A parte do front-end é acessível, pois está online, mas informações que dependem do back-end estão indisponíveis, já que rodam localmente.",
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
                        <a href={url[0]} className="blueButton ">
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
            <FooterPt />
        </>
    );
}