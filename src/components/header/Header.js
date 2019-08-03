import React from 'react'
// import image from '../../assets/img/home/footer-bg.jpg'

export default class Header extends React.Component {

    render() {
        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="/">CAECOMP</a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="about">Sobre</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="services">Membros</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="buy">Vendas</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }

}