import React from 'react'
import membro1 from '../../assets/membros/Evandro.jpeg'
import membro2 from '../../assets/membros/Herick.jpeg'
import membro3 from '../../assets/membros/Bia.jpeg'
import membro4 from '../../assets/membros/Luis.jpeg'
import membro5 from '../../assets/membros/Pedro.jpeg'
import membro6 from '../../assets/membros/Ricardo.jpeg'
import membro7 from '../../assets/membros/Rodrigo.jpeg'
import membro8 from '../../assets/membros/Diogo.jpeg'
import membro9 from '../../assets/membros/Catarina.jpeg'
import membro10 from '../../assets/membros/Leonardo.jpeg'
import Slider from '../index/slider/Slider';

export default class Members extends React.Component {

    render() {
        return (
            <div>
                <Slider />
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-4">Nossos Membros</h1>
                        <p class="lead">Conheça os membros do CAECOMP</p>
                    </div>
                </div>

                <br />

                <div class="container">
                    <div class="row">

                        <div class="col-sm mb-4">
                            <div class="card h-100 text-center">
                                <img class="card-img-top" src={membro9} alt="" style={{ height: '300px', width: '100%' }} />
                                <div class="card-body">
                                    <h4 class="card-title">Catarina</h4>
                                    <h6 class="card-subtitle mb-2 text-muted">Presidente</h6>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit.</p>
                                </div>
                                <div class="card-footer">
                                    <a href="#"></a>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm mb-4">
                            <div class="card h-100 text-center">
                                <img class="card-img-top" src={membro1} alt="" style={{ height: '300px', width: '100%' }} />
                                <div class="card-body">
                                    <h4 class="card-title">Evandro Capovilla</h4>
                                    <h6 class="card-subtitle mb-2 text-muted">Diretor de Assuntos Acadêmicos</h6>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit.</p>
                                </div>
                                <div class="card-footer">
                                    <a href="#">evandrocapovillajr@gmail.com</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm mb-4">
                            <div class="card h-100 text-center">
                                <img class="card-img-top" src={membro10} alt="" style={{ height: '300px', width: '100%' }} />
                                <div class="card-body">
                                    <h4 class="card-title">Leonardo Pigatto</h4>
                                    <h6 class="card-subtitle mb-2 text-muted">Secretário de assuntos acadêmicos</h6>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit.</p>
                                </div>
                                <div class="card-footer">
                                    <a href="#"></a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 mb-4">
                            <div class="card h-100 text-center">
                                <img class="card-img-top" src={membro8} alt="" style={{ height: '300px', width: '100%' }} />
                                <div class="card-body">
                                    <h4 class="card-title">Diogo</h4>
                                    <h6 class="card-subtitle mb-2 text-muted">Secretario Geral</h6>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit.</p>
                                </div>
                                <div class="card-footer">
                                    <a href="#">diogo.7.pinheiro@hotmail.com</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 mb-4">
                            <div class="card h-100 text-center">
                                <img class="card-img-top" src={membro2} alt="" style={{ height: '300px', width: '100%' }} />
                                <div class="card-body">
                                    <h4 class="card-title">Herick Carlsen</h4>
                                    <h6 class="card-subtitle mb-2 text-muted">Diretor de Esporte</h6>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit.</p>
                                </div>
                                <div class="card-footer">
                                    <a href="#">name@example.com</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 mb-4">
                            <div class="card h-100 text-center">
                                <img class="card-img-top" src={membro3} alt="" style={{ height: '300px', width: '100%' }} />
                                <div class="card-body">
                                    <h4 class="card-title">Bia Meloni</h4>
                                    <h6 class="card-subtitle mb-2 text-muted">Diretora de Eventos</h6>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit.</p>
                                </div>
                                <div class="card-footer">
                                    <a href="#">biameloni@gmail.com</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 mb-4">
                            <div class="card h-100 text-center">
                                <img class="card-img-top" src={membro6} alt="" style={{ height: '300px', width: '100%' }} />
                                <div class="card-body">
                                    <h4 class="card-title">Ricardo Alvim</h4>
                                    <h6 class="card-subtitle mb-2 text-muted">Diretor Administrativo</h6>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit.</p>
                                </div>
                                <div class="card-footer">
                                    <a href="#">name@example.com</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 mb-4">
                            <div class="card h-100 text-center">
                                <img class="card-img-top" src={membro7} alt="" style={{ height: '300px', width: '100%' }} />
                                <div class="card-body">
                                    <h4 class="card-title">Rodrigo Machado</h4>
                                    <h6 class="card-subtitle mb-2 text-muted">Diretor de Marketing</h6>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit.</p>
                                </div>
                                <div class="card-footer">
                                    <a href="#">rodrigomachado161@gmail.com</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 mb-4">
                            <div class="card h-100 text-center">
                                <img class="card-img-top" src={membro4} alt="" style={{ height: '300px', width: '100%' }} />
                                <div class="card-body">
                                    <h4 class="card-title">Luis Davila</h4>
                                    <h6 class="card-subtitle mb-2 text-muted">Secretario de Esportes</h6>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit.</p>
                                </div>
                                <div class="card-footer">
                                    <a href="#">luis.stein@hotmail.com</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 mb-4">
                            <div class="card h-100 text-center">
                                <img class="card-img-top" src={membro5} alt="" style={{ height: '300px', width: '100%' }} />
                                <div class="card-body">
                                    <h4 class="card-title">Pedro Zaca</h4>
                                    <h6 class="card-subtitle mb-2 text-muted">Secretario Administrativo</h6>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit.</p>
                                </div>
                                <div class="card-footer">
                                    <a href="#">pedro.s.z@hotmail.com</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

}