import React from 'react'
// import image from '../../assets/img/home/footer-bg.jpg'

export default class Footer extends React.Component {

    render() {
        return (
            <footer class="py-2 bg-dark" id="bottom-footer">
                <div class="container">
                    <div class="row" style={{paddingTop: "20px"}}>

                        <div class="col-md-6 mt-md-0 mt-3">

                            <h5 class="text-uppercase font-weight-bold">Footer text 1</h5>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita sapiente sint, nulla, nihil
                              repudiandae commodi voluptatibus corrupti animi sequi aliquid magnam debitis, maxime quam recusandae
                              harum esse fugiat. Itaque, culpa?</p>

                        </div>


                        <hr class="clearfix w-100 d-md-none pb-3" />


                        <div class="col-md-6 mb-md-0 mb-3">


                            <h5 class="text-uppercase font-weight-bold">Footer text 2</h5>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio deserunt fuga perferendis modi earum
                              commodi aperiam temporibus quod nulla nesciunt aliquid debitis ullam omnis quos ipsam, aspernatur id
          excepturi hic.</p>

                        </div>

                    </div>


                    <p class="m-0 text-center text-white">Copyright 2019 - CAECOMP</p>
                </div>
            </footer>
        )
    }

}