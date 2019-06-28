import React from 'react'
import Slider from '../slider/Slider'
import Cards from '../cards/Cards';
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