import React from 'react'
import bg from './image/bg.jpg'


const Statistic = () => {
  return (
    <>
    <div class="container-fluid bg-img" style={{height: 'auto',backgroundImage: `url(${bg})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cove'}}>
            <div class="container px-xl-5 px-lg-0 py-4">
                <div class="col-12 text-center text-white ">
                    <h3 class="fw-bolder fs-1 pt-5">Our Statistics</h3>
                    <p>Some More here..</p>
                </div>
                <div class="row text-center text-white">
                    <div class="col-md-3 col-sm-6 p-lg-5 p-md-3">
                        <p class="size p-3 fst-italic fw-bolder" style={{fontSize: '60px'}}>18</p>
                        <p>Years of Experience</p>
                    </div>
                    <div class="col-md-3 col-sm-6 p-lg-5 p-md-3">
                        <p class="size p-3 fst-italic fw-bolder"  style={{fontSize: '60px'}}>1200</p>
                        <p>Contest attended</p>
                    </div>
                    <div class="col-md-3 col-sm-6  p-lg-5 p-md-3">
                        <p class="size p-3 fst-italic fw-bolder"  style={{fontSize: '60px'}}>700</p>
                        <p>Happy Customer</p>
                    </div>
                    <div class="col-md-3 col-sm-6 p-lg-5 p-md-3">
                        <p class="size p-3 fst-italic fw-bolder"  style={{fontSize: '60px'}}>800</p>
                        <p>Weight Loss & Fitness</p>
                    </div>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default Statistic