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
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownPortfolio" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Mais informações
            </a>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownPortfolio">
                                    <a className="dropdown-item" href="newmember">Seja membro do CA</a>
                                    <a className="dropdown-item" href="what">O que fazemos ?</a>
                                    <a className="dropdown-item" href="helpus">Precisamos de você !</a>
                                    <a className="dropdown-item" href="ask">Tire suas duvidas</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownBlog" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Blog
            </a>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownBlog">
                                    <a className="dropdown-item" href="blog2019">2019</a>
                                    <a className="dropdown-item" href="blog2018">2018</a>
                                    <a className="dropdown-item" href="blog2017">2017</a>
                                </div>
                            </li>
                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownBlog" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Other Pages
            </a>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownBlog">
                                    <a className="dropdown-item" href="full-width.html">Full Width Page</a>
                                    <a className="dropdown-item" href="sidebar.html">Sidebar Page</a>
                                    <a className="dropdown-item" href="faq.html">FAQ</a>
                                    <a className="dropdown-item" href="404.html">404</a>
                                    <a className="dropdown-item" href="pricing.html">Pricing Table</a>
                                </div>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }

}