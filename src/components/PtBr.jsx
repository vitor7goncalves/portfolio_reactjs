import "./Body.css";
import React, { useState, useEffect } from "react";
import { Sidebar } from "./Sidebar";
import { FooterPt } from "./FooterPt"
import { HeaderPt } from "./HeaderPt";

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


export const PtBr = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentImageIndexGame, setCurrentImageIndexGame] = useState(0);

    var textText = { 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '' };
    var languageText = { 0: '', 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '' };
    var buttonText;

    languageText[0] = "Venho desenvolvendo com o CSharp há pouco mais de 2 anos. No entanto, a maior parte desse tempo foi dentro do Unity. Tenho também alguns pequenos projetos no GitHub onde utilizei essa ferramenta. E, claro, a cada dia aprendo mais, pois meus estudos com C# não param.";
    languageText[1] = "Todos os meus jogos e trabalhos freelancers de jogos foram feitos utilizando o Unity. Assim como com o CSharp, comecei a usar o Unity há um pouco mais de 2 anos. Inicialmente com o Unity 2D, e agora tenho explorado bastante o Unity 3D.";
    languageText[2] = "Embora eu não seja um especialista em Git e GitHub, tudo o que aprendi e utilizo é suficiente para trabalhar em equipe e manter meus projetos versionados. Caso precise, por algum motivo, recuperar uma versão anterior dos meus projetos, estou apto a fazê-lo.";
    languageText[3] = "Comecei a aprender Javascript em 2021. Apesar de focar mais em C# e Unity, trabalhei em uma empresa localizada em Ribeirão Preto - SP chamada Big2be, utilizando meus conhecimentos em Javascript. Essa empresa é especializada em e-commerce para supermercados, restaurantes e similares.";
    languageText[4] = "Meus estudos em HTML começaram junto com Javascript. Assim como no JS, utilizei HTML em meus projetos pessoais e na empresa citada acima.";
    languageText[5] = "E para completar o trio front-end, não poderia deixar de fora o CSS. Além de Javascript e HTML, estudo CSS desde 2021. Junto com as outras tecnologias, criei alguns projetos que estão no meu GitHub e também os utilizei na Big2be.";
    languageText[6] = "Vue.js é um framework JavaScript de código-aberto. Minha experiência profissional com esse framework começou em junho de 2023. Atualmente, estou trabalhando em alguns projetos freelancers para uma empresa chamada Orfeu Digital.";
    languageText[7] = "React.js é um framework JavaScript que foi criado pela Meta (anteriormente conhecida como Facebook) e é mantido por ela e pela comunidade de desenvolvedores em todo o mundo. Diferente do Vue.js, minha experiência com React é muito mais em estudos, que iniciei em agosto de 2023. Inclusive, este site foi desenvolvido em React.js.";
    languageText[8] = "Minha experiência em SQL começou em novembro de 2021 na empresa Big2be. Embora tenham se passado alguns anos, essa tecnologia é a que menos pratico em meus projetos. Atualmente, a utilizo em meus projetos na Orfeu Digital.";
    languageText[9] = "Em 10 de março de 2024, comecei a estudar Blender. Para aprofundar meus conhecimentos em criação de jogos 3D, comecei a estudar e praticar modelagem 3D. Com o objetivo de economizar em meus projetos pessoais, eu mesmo crio os objetos 3D que utilizo nos jogos que desenvolvo.";

    textText[1] = "Desenvolvedor de jogos e full-stack";
    textText[2] = "Sobre mim";
    textText[3] = "Olá, sou Vitor Gonçalves Rodrigues, desenvolvedor de jogos e full-stack. Nasci no Rio de Janeiro em 1982 e atualmente resido em Ribeirão Preto, SP. Minha paixão pela programação começou em 2016 durante a faculdade de Engenharia da Computação. Desde 2018, venho explorando o Unity e a linguagem CSharp, dedicado a transformar ideias criativas em experiências interativas e envolventes. Descubra mais sobre meu trabalho explorando o portfólio.";
    textText[4] = "Tecnologias";
    textText[5] = "Projetos";
    textText[6] = "Jogo que desenvolvi e vendo na Steam";
    textText[7] = "Paradise Beach Assets para jogos";
    textText[8] = "Clone do Netflix";
    textText[9] = "Roll Dices Game";
    buttonText = "Saiba mais";

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
            <HeaderPt />
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
                            Projetos
                        </h2>
                        <div className="cards">
                            <div className="capsuleCard">
                                <a href="" className="card">
                                    <h3>
                                        Trabalhos para Terceiros
                                    </h3>
                                    <img src={imagePaths[currentImageIndex]} alt="" />
                                </a>
                            </div>
                            <div className="capsuleCard">
                                <a href="" className="card">
                                    <h3>
                                        Jogos Digitais
                                    </h3>
                                    <img src={gamePaths[currentImageIndexGame]} alt="" />
                                </a>
                            </div>
                            <div className="capsuleCard">
                                <a href="" className="card">
                                    <h3>
                                        Meus Projetos
                                    </h3>
                                    <img src={imagePaths[currentImageIndex]} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterPt />
        </>
    );
}
