import React from 'react'
// import image from '../../assets/img/home/footer-bg.jpg'

export default class Slider extends React.Component {

    render() {
        return (
            <header>
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner" role="listbox">
                        <div class="carousel-item active" style={{backgroundImage: "url('https://images4.alphacoders.com/600/thumb-1920-600528.png')"}}>
                            <div class="carousel-caption d-none d-md-block">
                                <h3 class="slider">Campeonato de League of Legends</h3>
                                <p class="slider">O campeonato mais disputado da PUC - Campinas</p>
                            </div>
                        </div>
                        <div class="carousel-item" style={{backgroundImage: "url('https://i.ytimg.com/vi/ZYc7AE4UKJU/maxresdefault.jpg')"}}>
                            <div class="carousel-caption d-none d-md-block">
                                <h3 class="slider">Seja do CA</h3>
                                <p class="slider">Venha ser a nova geração do Centro Academico de Engenharia da Computação</p>
                            </div>
                        </div>
                        <div class="carousel-item" style={{backgroundImage: "url('https://king.host/blog/wp-content/uploads/2018/03/cursos-de-programacao-kinghost.png')"}}>
                            <div class="carousel-caption d-none d-md-block">
                                <h3 class="slider">Curso de HTML/CSS/JS</h3>
                                <p class="slider">Quer participar do curso que o CA está oferecendo ?</p>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </header>
        )
    }

}