import React from 'react'
import mapa from '../../assets/mapa/mapa.png'
// import image from '../../assets/img/home/footer-bg.jpg'

export default class Footer extends React.Component {

    render() {
        return (
            <footer class="py-2" id="bottom-footer">
                <div class="container">
                    <div class="row" style={{paddingTop: "20px"}}>

                        <div class="col-md-6 mt-md-0 mt-3">

                            <h5 class="text-uppercase font-weight-bold" style={{color: 'white'}}>Mapa do CA</h5>
                            <img src={mapa} class="img-thumbnail" style={{maxWidth: '400px',maxHeight: '400px'}}></img>
                            <p style={{color: 'white'}}>Venha visitar o nosso CA, fazer amizades, conversar, jogar video-games
                                                         e até criar projetos em grupos. Mas se atente as regras pois o espaço 
                                                         é de todos.</p>

                        </div>


                        <hr class="clearfix w-100 d-md-none pb-3" />


                        <div class="col-md-6 mb-md-0 mb-3">


                            <h5 class="text-uppercase font-weight-bold" style={{color: 'white'}}>Footer text 2</h5>
                            <p style={{color: 'white'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio deserunt fuga perferendis modi earum
                              commodi aperiam temporibus quod nulla nesciunt aliquid debitis ullam omnis quos ipsam, aspernatur id
          excepturi hic.</p>

                        </div>

                    </div>

                    
                    <p class="m-0 text-center text-white" style={{borderTopColor:'white', borderTop:'solid', paddingTop: '10px'}}>Copyright 2019 - CAECOMP</p>
                </div>
            </footer>
        )
    }

}