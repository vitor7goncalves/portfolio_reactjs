import "./Body.css";

import me from "../assets/Photo/me.png"
import csharp from "../assets/Icon/C Sharp.png"
import photoshop from "../assets/Icon/photoshop.png"
import unity from "../assets/Icon/unity.png"
import javascript from "../assets/Icon/javascript.png"
import html from "../assets/Icon/html-5.png"


export const PtBr = () => {

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
