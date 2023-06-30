import "./Body.css";

import cape from "../assets/backgroud.png"
import me from "../assets/me.png"
import csharp from "../assets/C Sharp.png"
import photoshop from "../assets/photoshop.png"
import unity from "../assets/unity.png"
import html from "../assets/html-5.png"
import linkedin from "../assets/linkedin_icon_135436.png"



export const PtBr = () => {

    var textText = { 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '' };
    var languageText = { 0: '', 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '' };
    var buttonText;


    languageText[0] = "Venho desenvolvendo com a C Sharp há pouco mais de 1 ano. No entanto, o maior tempo foi denro do Unity. Mas tenho pequenos projetos no GitHub onde usei essa ferramenta. E claro, a cada dia eu aprendo mais, porque meus estudos com C Sharp não param.";
    languageText[1] = "Eu uso Adobe photoshop para criar minhas artes digitais. A versão em que estou trabalhando atualmente é 2019. Toda a arte que criei nos meus projetos foi 97% através do Photoshop. Como disse sobre mim, migrei há cerca de 2 anos para a arte digital. Porque passei a vida inteira desenhando e pintando de forma convencional";
    languageText[2] = "E para completar o trio front-end, não poderia deixar de fora o CSS. Além de Javascript e HTML, estudo CSS desde setembro de 2020. E junto com as outras tecnologias, criei alguns projetos que estão no meu GitHub, e também usei na Big2be.";
    languageText[3] = "A tecnologia que eu mais uso agora. Com Unity criei e publiquei meu primeiro jogo na Steam, Magus Pocus. Unity é um motor de desenvolvimento que utiliza a linguagem de programação C Sharp, muito comum para criar jogos 2D e 3D.";
    languageText[4] = "Estou aprendendo sobre Javascript desde setembro de 2020. Apesar de focar mais em C# e Unity, trabalhei em uma empresa localizada em Ribeirão Preto - SP chamada Big2be, utilizando meus conhecimentos em Javascript. Empresa especializada em e-commerce para supermercados, restaurantes e similares.";
    languageText[5] = "Venho estudando e me aprimorando em HTML junto com Javascript. E assim como no JS, usei HTML em meus projetos pessoais e na empresa citada acima.";
    languageText[6] = "Magus Pocus é um jogo de plataforma 2D. Eu o criei há alguns meses e levou 6 meses para ser concluído. Eu desenvolvi do zero toda a arte e a programação.";
    languageText[7] = "Paradise Beach são Assets que contêm algumas imagens para criação de cenários em jogos. Contém 3 variações de caules e copas de coqueiros para você combinar e criar diferentes tipos de coqueiros, arbustos, fundo de praia, pedras e chão";
    languageText[8] = "Recriei a página da Netflix no dia 7 de janeiro. 2021, para aprimorar meus conhecimentos em Javascript, HTML e CSS. Acesse meu GitHub se quiser o código-fonte.";
    languageText[9] = "Um jogo simples que simula rolagem de dados feita em Unity 2D. O jogo é de código aberto e para usar crie um novo projeto e substitua a pasta Assets. Acesse meu GitHub se quiser o código-fonte.";
    textText[1] = "Desenvolvedor de jogos e designer digital";
    textText[2] = "Sobre mim";
    textText[3] = "Meu nome é Vitor Gonçalves Rodrigues, nasci no Rio de Janeiro em 2 de maio de 1982, moro em Ribeirão Preto no estado de São Paulo. Sou desenvolvedor e designer de jogos. Há pouco mais de 2 anos resolvi migrar para a arte digital. Trabalhei em uma startup que tem um projeto de e-commerce por 9 meses. Hoje trabalho em projetos de jogos como freelancer, um deles é um jogo chamado Kami Kaido para um estúdio localizado no Porto - Portugal. Também estou criando e vendendo assets na Unity Assets Store. Sou apaixonado pelo que faço, tanto que considero mais um hobby do que um trabalho.";
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
                            &copy; Vitor7Goncalves - Esta pagina foi desenvolvida com React.js
                        </h3>
                    </footer>
                </div>
        </body >
        </>
    );
}
