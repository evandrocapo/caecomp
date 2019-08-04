import React from 'react'
// import image from '../../assets/img/home/footer-bg.jpg'
import imglogo from '../../../assets/logo/logo.jpg'

export default class Cards extends React.Component {

    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 mb-4">
                        <div class="card h-100">
                            <h4 class="card-header">Arrecadação de alimento</h4>
                            <div class="card-body">
                                <p class="card-text">Ajude pessoas carentes com a nossa arrecadação anual que ocorrera nos dias X a Y</p>
                                <img src={'https://img2.gratispng.com/20180406/dle/kisspng-food-gift-baskets-fruit-hamper-fruits-basket-5ac70f024b7f26.5952954815229949463092.jpg'} style={{ maxHeight: '200px', maxWidth: '200px' }}></img>
                            </div>
                            <div class="card-footer">
                                <a href="#" class="btn btn-primary">Mais</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-4">
                        <div class="card h-100">
                            <h4 class="card-header">Reunioes do CA</h4>
                            <div class="card-body">
                                <p class="card-text">As nossas reunioes acontecem todas as *-Feiras as **:** no CA.</p>
                                <img src={'https://image.freepik.com/vetores-gratis/design-de-fundo-negocio-reuniao_1212-563.jpg'} style={{ maxHeight: '200px', maxWidth: '200px' }}></img>
                            </div>
                            <div class="card-footer">
                                <a href="#" class="btn btn-primary">Mais</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-4">
                        <div class="card h-100">
                            <h4 class="card-header">Conheca o espaço CA</h4>
                            <div class="card-body">
                                <p class="card-text">Venha se divertir jogando video games e conversando com seus colegas e veteranos.</p>
                                <img src={imglogo} style={{ maxHeight: '200px', maxWidth: '200px' }}></img>
                            </div>
                            <div class="card-footer">
                                <a href="#" class="btn btn-primary">Mais</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}