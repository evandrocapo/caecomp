import React from 'react'
import Slider from '../index/slider/Slider'
import Cards from '../index/cards/Cards';
// import image from '../../assets/img/home/footer-bg.jpg'

export default class Index extends React.Component {

    render() {
        return (
            <div>
                <Slider />
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-4">Sobre nós</h1>
                        <p class="lead">Tire suas duvidas sobre nós.</p>
                    </div>
                </div>

                <h2></h2>

                <br/>
                <Cards />
            </div>
        )
    }

}