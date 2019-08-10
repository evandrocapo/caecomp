import React from 'react'
import image from '../../assets/logo/logo.jpg'

export default class Header extends React.Component {

    render() {
        return (
            <nav className="navbar fixed-top navbar-expand-lg fixed-top navbar-dark" id="navbar-top-ed">
                <div className="container">
                    <a className="navbar-brand" id="font-nav" href="/"><img src={image} style={{maxWidth:"30px",maxHeight:"30px"}}/> CAECOMP</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" id="font-nav" href="about" style={{ color: "white" }}>Sobre</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="font-nav" href="membros" style={{ color: "white" }}>Membros</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="font-nav" href="vendas" style={{ color: "white" }}>Vendas</a>
                            </li>
                        </ul>
                        <ul class="navbar-nav nav-flex-icons">
                            <li class="nav-item">
                                <a class="nav-link waves-effect waves-light" href="https://www.facebook.com/roy.caecomp.3">
                                    <i class="fab fa-facebook-f" style={{ color: "white" }}></i>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link waves-effect waves-light" href="https://www.instagram.com/caecomp.pucc">
                                    <i class="fab fa-instagram" style={{ color: "white" }}></i>
                                </a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link waves-effect waves-light" href="#">
                                    <i class="far fa-user" style={{ color: "white" }}></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }

}