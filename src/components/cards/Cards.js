import React from 'react'
// import image from '../../assets/img/home/footer-bg.jpg'

export default class Cards extends React.Component {

    render() {
        return (
            <div class="row">
                <div class="col-lg-4 mb-4">
                    <div class="card h-100">
                        <h4 class="card-header">Arrecadação de alimento</h4>
                        <div class="card-body">
                            <p class="card-text">Ajude pessoas carentes com a nossa arrecadação anual que ocorrera nos dias X a Y</p>
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
                        </div>
                        <div class="card-footer">
                            <a href="#" class="btn btn-primary">Mais</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}