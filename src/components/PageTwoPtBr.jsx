import "./PageOne.css"
import { SidebarPageTwo } from "./SidebarPageTwo";
import { FooterPt } from "./FooterPt";
import BackImg from "../assets/Img/background.png";
import buttonBlue from "../assets/Background/ButtonBlue.png";
import buttonGold from "../assets/Background/GoldButton.png";
import buttonWhite from "../assets/Background/ButtonWhite.png";
import backButton from "../assets/Background/BackButton.png";
import OrfeuDigital from "../assets/Video/OrfeuDigital.mp4"
import CompanhiaDoSono from "../assets/Video/CompanhiaDoSono.mp4"
import Border from "../assets/Background/CicleBorder.png"
import BorderTop from "../assets/Background/lineGold.jpg"

export const PageTwoPtBr = () => {
    const text = {
        0: 'Ir para Steam',
        1: 'Inacessivel ',
        2: 'Visite a página'
    };
    const title = {
        one: 'Magus Pocus - Jogo de Plataforma 2D',
        two: 'Magus Pocus: Arcane Essence - Aventura RPG em 2D',
        three: 'Magus Pocus: Edição 3D',
        four: 'Kami Kaido'
    }
    const content = {
        1: "Um jogo que desenvolvi usando Unity 2D (uma plataforma para desenvolvimento de jogos eletrônicos que utiliza a linguagem de programação C#). Atualmente, o jogo está disponível para venda na Steam.",
        2: "Uma nova versão de Magus Pocus sendo desenvolvida com Unity 2D. Ao contrário da versão anterior, que é um simples jogo de plataforma, Magus Pocus: Essência Arcana será um jogo de RPG com mecânicas mais complexas e desafios maiores.",
        3: "Uma versão de Magus Pocus, mas em 3D, atualmente sendo desenvolvida com Unity 3D. Ainda não tenho certeza se será um jogo completo ou apenas uma demonstração para aprimorar minhas habilidades com Unity 3D e Blender, já que criei pessoalmente os objetos 3D nesta cena.",
        4: "Kami Kaido é um jogo 2D baseado em Loop Hero, mas com uma temática japonesa feudal. O jogo pertence a um estudio chamado Black Mamba Games. Fui contratado como freela para liderar a equipe que desenvolveu o mapa de exploração e combate. O game é desenvolvido usando a Unity 2D. Os assets foram criados por MandyDebussy e Marina Yamamoto"
    }
    const url = { 1: '', 2: '', 3: '' };
    url[0] = "https://store.steampowered.com/app/2101760/Magus_Pocus/";
    url[1] = "https://www.youtube.com/@blackmambagames7437";

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
                        <a className="linkThird-party" href="https://mary99.myportfolio.com/">Site de Marina Yamamoto: https://mary99.myportfolio.com/</a>
                        <a className="linkThird-party" href="https://www.instagram.com/debussy_art/">Instagram de MandyDeBussy: https://www.instagram.com/debussy_art/</a>
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
            <FooterPt />
        </>
    );
}