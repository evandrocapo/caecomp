import React from 'react'
import Slider from '../index/slider/Slider'
import Cards from '../index/cards/Cards';
// import image from '../../assets/img/home/footer-bg.jpg'

export default class Index extends React.Component {

    render() {
        return (
            <div>
                <Slider />
                <br></br>
                <Cards />
            </div>
        )
    }

}