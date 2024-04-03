import React from 'react'

const Footer = () => {
  return (
    <>
    <div class="container-fluid bg-black" >
            <div class="container ">
                <div class="row py-lg-5 py-sm-5 ">
                    <div class="col-md-5 ">
                        <div class="row px-lg-3">
                            <div class="col-md-12 col-sm-6 col-lg-6 d-flex ">
                                <div class="col-2 text-center pt-lg-3 text-white">
                                    <i class="fa-solid fa-user fa-lg"></i>
                                </div>
                                <div class="col-10 pt-lg-3 text-start px-lg-3">
                                    <h3 class="fw-bolder fs-p1 pb-lg-3 text-white">ABOUT US</h3>
                                    <p class="text-gr fs-6 " style={{color: '#999'}}>Sed ut perspiciatis unde omnis iste natus error sit.</p>
                                </div>
                            </div>
                            <div class="col-md-12 col-sm-6 col-lg-6 d-flex">
                                <div class="col-2 text-center pt-lg-3 text-white">
                                    <i class="fa-solid fa-hand-point-right fa-lg"></i>
                                </div>
                                <div class="col-10 pt-lg-3 text-start px-lg-3">
                                    <h3 class="fw-bolder fs-p1 pb-lg-3 text-white">WHO WE ARE</h3>
                                    <p class="text-gr fs-6 " style={{color: '#999'}}>Error sit antium dolorts remq hymue laud.</p>
                                </div>
                            </div>
                            <div class="col-md-12 col-sm-6 col-lg-6 d-flex">
                                <div class="col-2 text-center pt-lg-3 text-white">
                                    <i class="fa-solid fa-ticket fa-lg"></i>
                                </div>
                                <div class="col-10 pt-lg-3 text-start px-lg-3">
                                    <h3 class="fw-bolder fs-p1 pb-3 text-white">WE OFFER</h3>
                                    <p class="text-gr fs-6 " style={{color: '#999'}}>Sed ut perspiciatis unde omnis iste natus error sit.</p>
                                </div>
                            </div>
                            <div class="col-md-12 col-sm-6 col-lg-6 d-flex">
                                <div class="col-2 text-center pt-lg-3 text-white">
                                    <i class="fa-solid fa-bullhorn fa-lg"></i>
                                </div>
                                <div class="col-10 pt-lg-3 text-start px-lg-3">
                                    <h3 class="fw-bolder fs-p1 pb-3 text-white">POPULAR IN</h3>
                                    <p class="text-gr fs-6 " style={{color: '#999'}}>Error sit antium dolorts remq hymue laud.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 pe-lg-5 pe-md-0 pb-sm-5">
                        <div class="row">
                            <h3 class="fw-bolder fs-p1 pt-3 text-white h">NEWSLETTER</h3>
                            <p class="fs-6 pt-3" style={{color: '#999'}}>Be the first to get latest news and offers!
                                Sed ut perspiciatis unde omnis.</p>
                            <div class="input-group">
                                <input type="search" class="form-control rounded-0 " placeholder="Enter your email...."
                                    aria-label="Search" aria-describedby="search-addon" />
                                <button type="button" class="bg-color border-0 text-white bg-submit"
                                    style={{height: '50px', width: '80px'}}>Submit</button>
                            </div>
                            <h5 class="fw-bolder  pt-3 text-white">CONNECT WITH SOCIAL</h5>
                            <div class="row pt-3 d-flex  ps-4">
                                <i
                                    class="fa-brands fa-facebook-f fa text-white icon-fb d-flex justify-content-center align-items-center me-2" style={{width: '40px',
                                        height: '35px',
                                        background: '#3b5998'}}></i>
                                <i
                                    class="fa-brands fa-twitter text-white  d-flex justify-content-center align-items-center me-2 icon-tw " style={{width: '40px',
                                    height: '35px',
                                    background: '#1da1f2'}}></i>
                                <i
                                    class="fa-solid fa-basketball text-white  d-flex justify-content-center align-items-center me-2 icon-ba" style={{width: '40px',
                                    height: '35px',
                                    background: '#ea4c89'}}></i>
                                <i
                                    class="fa-brands fa-google-plus-g d-flex justify-content-center align-items-center me-2 icon-gp" style={{width: '40px',
                                    height: '35px',
                                    background: '#F44336'}}></i>
                            </div>

                        </div>
                    </div>
                    <div class="col-md-3 pe-lg-5 pe-md-0">
                        <div class="row">
                            <h3 class="fw-bolder fs-p1 pt-3 text-white">CONTACT US</h3>
                            <h6 class="fw-bolder pt-3 text-white">Phone</h6>
                            <p class="text-gr fs-6 " style={{color: '#999'}}>+121 098 8907 9987</p>
                            <br/>
                            <h6 class="fw-bolder pt-3 text-white">Email</h6>
                            <p class="text-gr fs-6 " style={{color: '#999'}}>info@example.com</p>
                            <br/>
                            <h6 class="fw-bolder pt-3 text-white">Location</h6>
                            <p class="text-gr fs-6 " style={{color: '#999'}}>Honey Avenue, New York City</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
        <div class="container-fluid footer-bg text-gr text-center p-3 " style={{color: '#999', background: '#1c1d21'}} >
            <div class="container">
                <p> &copy;2018 Befit. All rights reserved | Design by
                    <a href="#" class="footer-a text-decoration-none" style={{color: 'white'}}>W3layouts</a>
                </p>
            </div>
        </div>
    </>
  )
}

export default Footer