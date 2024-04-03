import React from "react";
import image1 from "./image/1.jpg";
import image2 from "./image/2.jpg";
import image3 from "./image/3.jpg";
import image4 from "./image/4.jpg";

const Header = () => {
  return (
    <>
      <div class="header">
        <div class="container-fluid">
          <div id="carouselExampleIndicators" class="carousel slide">
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
            </div>

            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={image1} class="d-block w-100 " alt="..."  style={{height: '750px', backgroundSize: 'cover',
            position: 'relative', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}/>
                <div class="col-12 col-auto text-end p-lg-0 p-xl-5 p-lg-3 p-sm-1" style={{bottom: '250px',
    right: '9%',
    width: '79%',position: 'absolute'
  }}>
                  <h1 class=" fw-bolder text-light con-h1 pe-xl-5 pe-lg-2 pe-sm-0 " style={{fontSize: '55px'}}>
                    WELCOME OUR BEFIT
                  </h1>
                  <p class=" d-flex justify-content-end text-light mt-xl-3 fs-p">
                    <span class=" w-50 pe-xl-5 pe-lg-2 pe-sm-0">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      acntium doemque laudantium, totam rem aperiam eaque ipsa
                      quae ab illo
                    </span>
                  </p>
                  <button class="border-1 bg-transparent text-white px-3 py-2  me-3 rounded-1 mt-xl-5 mt-lg-3" style={{width: '115px', border: '1px solid #fff'}}>
                    Read More
                  </button>
                  <button class="border-1 bg-transparent text-white px-3 py-2 me-xl-5 me-lg-2 me-sm-0 rounded-1 mt-xl-5 mt-lg-3 but-bm" style={{width: '115px',border: '1px solid #fff'}}>
                    Contact Us
                  </button>
                </div>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
              <div class="carousel-item">
                <img src={image2} class="d-block w-100" alt="..."  style={{height: '750px', backgroundSize: 'cover',
            position: 'relative', position: 'relative', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}/>
                <div class="col-12 text-end p-xl-5 p-sm-3" style={{bottom: '250px',
    right: '9%',
    width: '79%',position: 'absolute'
  }}>
                  <h1 class="fw-bolder text-light con-h1 pe-xl-5 pe-lg-2 pe-sm-0 fs-h1">
                    YOGA & MEDITATION
                  </h1>
                  <p class=" d-flex justify-content-end text-light mt-xl-3">
                    <span class="w-50 pe-xl-5 pe-lg-2 pe-sm-0 fs-p">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      acntium doemque laudantium, totam rem aperiam eaque ipsa
                      quae ab illo
                    </span>
                  </p>
                  <button class="border-1 bg-transparent text-white px-3  py-2 me-3 rounded-1 mt-xl-5 mt-lg-3 but-bm " style={{width: '115px',border: '1px solid #fff'}}>
                    Read More
                  </button>
                  <button class="border-1 bg-transparent text-white px-3 py-2 me-xl-5 me-lg-2 me-sm-0 rounded-1 mt-xl-5 mt-lg-3 but-bm" style={{width: '115px',border: '1px solid #fff'}}>
                    Contact Us
                  </button>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
              <div class="carousel-item">
                <img src={image3} class="d-block w-100" alt="..."  style={{height: '750px', backgroundSize: 'cover',
            position: 'relative', position: 'relative', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}/>
                <div class="col-12 text-start wd-xl p-xl-5 p-sm-3 " style={{bottom: '250px',
    right: '9%',
    width: '79%',position: 'absolute'
  }}>
                  <h1 class="ps-xl-5 ps-lg-2 ps-sm-0 fw-bolder text-light  fs-h1">
                    YOUR HEALTH COACH
                  </h1>
                  <p class=" d-flex justify-content-start text-light mt-xl-3 ">
                    <span class="ps-xl-5  ps-lg-0 ps-sm-0 fs-p">
                      Sed parth ut perspiciatis unde omnis iste natus error sit
                      acntium doemque laudantium, totam rem aperiam eaque ipsa
                      quae ab illo
                    </span>
                  </p>
                  <button class="border-1 bg-transparent text-white ps-3 py-2 ms-xl-5 ms-lg-2 ms-lg-0 rounded-1 mt-xl-5 mt-lg-3 " style={{width: '115px',border: '1px solid #fff'}}>
                    Read More
                  </button>
                  <button class="border-1  bg-transparent text-white px-3 py-2 ms-3 rounded-1 mt-xl-5 mt-lg-3 but-bm " style={{width: '115px',border: '1px solid #fff'}}>
                    Contact Us
                  </button>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
              <div class="carousel-item">
                <img src={image4} class="d-block w-100 " alt="..." style={{height: '750px', backgroundSize: 'cover',
            position: 'relative', position: 'relative', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}} />
                <div class="col-12 text-start wd-xl p-xl-5 p-sm-3 " style={{bottom: '250px',
    right: '9%',
    width: '79%',position: 'absolute'
  }}>
                  <h1 class="ps-xl-5 ps-lg-2 ps-sm-0 fw-bolder text-light coach-h1 fs-h1">
                    HEALTH & STRENGTH
                  </h1>
                  <p class=" d-flex justify-content-start text-light mt-xl-3 ">
                    <span
                      class=" ps-xl-5  ps-lg-0 ps-sm-0 fs-p"
                      style={{ width: "68%" }}
                    >
                      Sed ut perspiciatis unde omnis iste natus error sitacntium
                      doemque laudantium, totam rem aperiam eaque ipsa quae ab
                      illo
                    </span>
                  </p>
                  <button class="border-1 bg-transparent text-white px-3 py-2 ms-xl-5 ms-lg-2 ms-lg-0 rounded-1 mt-xl-5 mt-lg-3 " style={{width: '115px',border: '1px solid #fff'}}>
                    Read More
                  </button>
                  <button class="border-1  bg-transparent text-white px-3 py-2 ms-3 rounded-1 mt-xl-5 mt-lg-3 but-bm " style={{width: '115px',border: '1px solid #fff'}}>
                    Contact Us
                  </button>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
              </div>
              <div class="row px-4 py-4">
                <div
                  class="col-xl-6 col-lg-4 col-md-9 col-sm-9 col-auto ps-5 pt-3 fw-bolder text-white"
                  style={{ position: "absolute", top: "0" }}
                >
                  <h1>Befit</h1>
                </div>
                <div class=" col-xl-6 col-lg-8  col-md-3  col-sm-3 col-auto pt-3 justified-content-end header-position" style={{position: 'absolute',
            right: '0px',
            top: '0'}}>
                  <nav class="navbar navbar-expand-lg w-75">
                    <button
                      class="navbar-toggler  bg-white text-black py-2 px-3 btn btn-border"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarNavDropdown"
                      aria-controls="navbarNavDropdown"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span class="">Menu</span>
                    </button>
                    <div
                      class="collapse navbar-collapse"
                      id="navbarNavDropdown"
                    >
                      <ul class="navbar-nav">
                        <li class="nav-item">
                          <a
                            class="nav-link active me-3 ms-1 ps-3 pe-3 text-black bg-white rounded-2"
                            aria-current="page"
                            href="#"
                          >
                            Home
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link me-3 ms-1 ps-3 pe-3 text-white rounded-2 parth"
                            href="#"
                          >
                            AboutUs
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link me-3 ms-1 ps-3 pe-3 text-white rounded-2 parth"
                            href="#"
                          >
                            Gallery
                          </a>
                        </li>

                        <li class="nav-item dropdown">
                          <a
                            class="nav-link dropdown-toggle text-white rounded-2 parth"
                            href="#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Dropdown
                          </a>
                          <ul
                            class="dropdown-menu bg-dark"
                            aria-labelledby="navbarDropdownMenuLink"
                          >
                            <li>
                              <a
                                class="dropdown-item text-primary nav-link"
                                href="#"
                              >
                                Action
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item text-white" href="#">
                                Blog
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item text-white" href="#">
                                Blog details
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item text-white" href="#">
                                What We Do
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item text-white" href="#">
                                Testimonials
                              </a>
                            </li>
                          </ul>
                        </li>

                        <li class="nav-item">
                          <a
                            class="nav-link me-3 ms-1 ps-3 pe-3 text-white rounded-2 parth"
                            href="#"
                          >
                            ContactUs
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
