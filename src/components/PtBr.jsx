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

    languageText[0] = "Venho desenvolvendo com a C Sharp há pouco mais de 2 ano. No entanto, o maior tempo foi dentro do Unity. Mas tenho pequenos projetos no GitHub onde usei essa ferramenta. E claro, a cada dia eu aprendo mais, porque meus estudos com C Sharp não param.";
    languageText[1] = "Eu uso Adobe photoshop para criar minhas artes digitais. A versão em que estou trabalhando atualmente é 2019. Toda a arte que criei nos meus projetos foi 97% através do Photoshop. Como disse sobre mim, migrei há cerca de 2 anos para a arte digital. Porque passei a vida inteira desenhando e pintando de forma convencional";
    languageText[2] = "E para completar o trio front-end, não poderia deixar de fora o CSS. Além de Javascript e HTML, estudo CSS desde setembro de 2020. E junto com as outras tecnologias, criei alguns projetos que estão no meu GitHub, e também usei na Big2be.";
    languageText[3] = "A tecnologia que eu mais uso agora. Com Unity criei e publiquei meu primeiro jogo na Steam, Magus Pocus. Unity é um motor de desenvolvimento que utiliza a linguagem de programação C Sharp, muito comum para criar jogos 2D e 3D.";
    languageText[4] = "Estou aprendendo sobre Javascript desde setembro de 2020. Apesar de focar mais em C# e Unity, trabalhei em uma empresa localizada em Ribeirão Preto - SP chamada Big2be, utilizando meus conhecimentos em Javascript. Empresa especializada em e-commerce para supermercados, restaurantes e similares.";
    languageText[5] = "Venho estudando e me aprimorando em HTML junto com Javascript. E assim como no JS, usei HTML em meus projetos pessoais e na empresa citada acima.";
    languageText[6] = "Magus Pocus é um jogo de plataforma 2D. Eu o criei há alguns meses e levou 6 meses para ser concluído. Eu desenvolvi do zero toda a arte e a programação.";
    languageText[7] = "Paradise Beach são Assets que contêm algumas imagens para criação de cenários em jogos. Contém 3 variações de caules e copas de coqueiros para você combinar e criar diferentes tipos de coqueiros, arbustos, fundo de praia, pedras e chão";
    languageText[8] = "Recriei a página da Netflix no dia 7 de janeiro. 2021, para aprimorar meus conhecimentos em Javascript, HTML e CSS. Acesse meu GitHub se quiser o código-fonte.";
    languageText[9] = "Um jogo simples que simula rolagem de dados feita em Unity 2D. O jogo é de código aberto e para usar crie um novo projeto e substitua a pasta Assets. Acesse meu GitHub se quiser o código-fonte.";
    textText[1] = "Desenvolvedor de jogos e full-stack";
    textText[2] = "Sobre mim";
    textText[3] = "Meu nome é Vitor Gonçalves Rodrigues, nasci no Rio de Janeiro em 2 de maio de 1982, moro em Ribeirão Preto no estado de São Paulo. Sou desenvolvedor de jogos e full-stack. Trabalhei em uma startup que tem um projeto de e-commerce por 9 meses. Hoje trabalho em projetos de jogos como freelancer, um deles é um jogo chamado Kami Kaido para um estúdio localizado no Porto - Portugal, além de outros projetos que menciono neste site. Sou apaixonado pelo que faço, tanto que considero mais um hobby do que um trabalho.";
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
            </body>
        </>
    );
}
