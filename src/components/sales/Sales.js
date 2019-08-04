import React from 'react'
import Slider from '../index/slider/Slider';
import produto1 from '../../assets/vendas/produto1.jpg'
import produto2 from '../../assets/vendas/produto2.jpg'

export default class Sales extends React.Component {

    render() {
        return (
            <div>
                <Slider/>
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-4">Nossos Produtos</h1>
                        <p class="lead">Conheça nossos produtos.</p>
                    </div>
                </div>

                <br/>

                <div class="container">
                    <div class="row">

                        <div class="col-sm mb-4">
                            <div class="card h-100 text-center">
                                <img class="card-img-top" src={produto1} alt="" style={{height: '300px', width: '100%'}}/>
                                <div class="card-body">
                                    <h4 class="card-title">Camiseta 1</h4>
                                    <h6 class="card-subtitle mb-2 text-muted">7 Produtos restantes</h6>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit.</p>
                                </div>
                                <div class="card-footer">
                                    Compre Já
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 mb-4">
                            <div class="card h-100 text-center">
                                <img class="card-img-top" src={produto2} alt="" style={{height: '300px', width: '100%'}} />
                                <div class="card-body">
                                    <h4 class="card-title">Camiseta 2</h4>
                                    <h6 class="card-subtitle mb-2 text-muted">10 Produtos restantes</h6>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit.</p>
                                </div>
                                <div class="card-footer">
                                Compre Já
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 mb-4">
                            <div class="card h-100 text-center">
                                <img class="card-img-top" alt="" style={{height: '300px', width: '100%'}} />
                                <div class="card-body">
                                    <h4 class="card-title">Produto Indisponivel</h4>
                                    <h6 class="card-subtitle mb-2 text-muted">Produto Indisponivel</h6>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit.</p>
                                </div>
                                <div class="card-footer">
                                    Indisponivel
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}