import React from 'react'
import wh1 from './image/wh1.jpg'
import wh2 from './image/wh2.jpg'
import wh3 from './image/wh3.jpg'
import wh4 from './image/wh4.jpg'
import ab from './image/ab.jpg'

const Whatdo = () => {
  return (
    <>
    <div class="container-fluid " style={{height: 'auto'}}>
            <div class="comtainer m-xl-5 " style={{height: 'auto'}}>
                <div class="row text-center p-5">
                    <h1 class="fw-bolder fs-1 text-bl ">What we do</h1>
                    <p class="text-gr">Best Benifits for your Body</p>
                </div>
                <div class="row m-xl-0  " style={{height: 'auto'}}>
                    <div class="col-lg-6 col-md-12 ">
                        <div class="row row-gap-4 my-5 column-gap-5 ms-xl-5 ms-lg-3">
                            <div class="col-5 p-xl-4 p-lg-0 d-flex align-items-center text-center flex-column ">
                                <img src={wh1} alt="" class="rounded-circle w-75 shadow-lg  "/>
                                <h3 class="my-3 fw-bolder fs-5">Balance Body</h3>
                                <p class="text-gr lh-lg font-size">Sit amet mattis quam, sit amet excepteur sint
                                    occaecat cupidatat.</p>
                            </div>
                            <div class="col-5 p-xl-4 p-lg-0 d-flex align-items-center text-center flex-column ">
                                <img src={wh2} alt="" class="rounded-circle w-75 shadow-lg "/>
                                <h3 class="my-3 fw-bolder fs-5">Nutrition Plan</h3>
                                <p class="text-gr lh-lg font-size">Sit amet mattis quam, sit amet excepteur sint
                                    occaecat cupidatat.</p>
                            </div>
                            <div class="col-5 p-xl-4 p-lg-0 d-flex align-items-center text-center flex-column ">
                                <img src={wh3} alt="" class="rounded-circle w-75 shadow-lg "/>
                                <h3 class="my-3 fw-bolder fs-5">Weight Loss Program</h3>
                                <p class="text-gr lh-lg font-size">Sit amet mattis quam, sit amet excepteur sint
                                    occaecat cupidatat.</p>
                            </div>
                            <div class="col-5 p-xl-4 p-lg-0 d-flex align-items-center text-center flex-column ">
                                <img src={wh4} alt="" class="rounded-circle w-75 shadow-lg "/>
                                <h3 class="my-3 fw-bolder fs-5">Routein program</h3>
                                <p class="text-gr lh-lg font-size">Sit amet mattis quam, sit amet excepteur sint
                                    occaecat cupidatat.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 px-sm-5 col-img">
                        <img src={ab} alt="" class="img-fluid h-100"/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Whatdo