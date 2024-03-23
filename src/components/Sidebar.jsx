import "./Sidebar.css";
import logo from "../assets/logo.png";
import br from "../assets/br.jpg";
import eua from "../assets/eua.jpg";

export const Sidebar = () => {
    const ptBr = () => {
        window.location.href = '/pt-br';
    };

    const eng = () => {
        window.location.href = '/eng';
    };

    return (
        <>
            <div className="container">
                <div className="top-bar">
                    <div className="top-bar-soon">
                        <div className="top-bar-soon-content">
                            <p>E-mail: vitor7goncalves@outlook.com</p>
                            <a href=""><img src={logo} className='logo' alt="" /></a>
                        </div>
                        <div className='select'>
                            <button onClick={ptBr}><img src={br} /></button>
                            <button onClick={eng}><img src={eua} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}