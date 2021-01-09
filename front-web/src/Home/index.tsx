import React from 'react';
import './style.css';
import { ReactComponent as Image } from './main.svg';


const Home = () => {
    return (
        <div className="home-container">
            <div className="home-content">
                <div className="home-actions">
                    <h1 className="home-title">
                        Faça seu pedido <br/>que entregamos <br/>para você!
                    </h1>
                    <h3 className="home-subtitle">
                        Escolha o seu pedido e em poucos minutos <br/>levaremos na sua porta
                    </h3>
                    <a href="order" className="home-btn-order">FAZER PEDIDO</a>
                </div>
                <div className="home-image"> <Image/> </div>
            </div>
        </div>
    );
};



export default Home;
