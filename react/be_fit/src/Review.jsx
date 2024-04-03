import React from 'react'
import te1 from './image/te1.jpg'
import te2 from './image/te2.jpg'
import te3 from './image/te3.jpg'

const Review = () => {
  return (
    <>
 <div class="container-fluid " style={{background: '#6c3cff'}}>
            <div class="container p-xl-5 p-lg-3 pb-sm-5 ">
                <div class="row text-center py-4 ">
                    <h1 class="fw-bolder fs-1 text-bl text-white ">Testimonials</h1>
                    <p class="text-gr text-white">Our Reviews</p>
                </div>
                <div class="row d-flex justify-content-center  ">
                    <div class="col-xl-3 col-md-4 ms-xl-5 ms-lg-0 text-center px-xl-3 py-lg-4 py-xl-4 pb-sm-5">
                        <p class="fs-p pb-3 text-white">"Sed ut perspiciatis unde omnis iste natus error sit volup tatem
                            accus antium dolore tium.</p>
                        <img src={te1} alt="" class=" rounded-circle pb-3"/>
                        <h5 class="bs-color py-2 my-2 text-white mx-sm-5 ">PAUL MOLIVE</h5>
                    </div>
                    <div class="col-xl-3 col-md-4  ms-xl-5 text-center px-xl-3 py-lg-4 py-xl-4">
                        <p class="fs-p pb-3 text-white">"Sed ut perspiciatis unde omnis iste natus error sit volup tatem
                            accus antium dolore tium.</p>
                        <img src={te2} alt="" class="rounded-circle pb-3"/>
                        <h5 class="bs-color py-2 my-2 text-white mx-sm-5">GAIL FORCI</h5>
                    </div>
                    <div class="col-xl-3 col-md-4 ms-xl-5 text-center px-xl-3 py-lg-4 py-xl-4">
                        <p class="fs-p pb-3 text-white">"Sed ut perspiciatis unde omnis iste natus error sit volup tatem
                            accus antium dolore tium.</p>
                        <img src={te3} alt="" class="rounded-circle pb-3"/>
                        <h5 class="bs-color py-2 my-2 text-white mx-sm-5">ANNA NULL</h5>
                    </div>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default Review