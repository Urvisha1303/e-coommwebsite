import React from 'react'
import b1 from './image/b1.jpg'
import b2 from './image/b2.jpg'

const Blog = () => {
  return (
    <>
    <div class="container-fluid">
            <div class="container m-xl-5  m-lg-0 p-lg-0 p-xl-5">
                <div class="row text-center p-5">
                    <h1 class="fw-bolder fs-1 text-bl ">Our Blog</h1>
                    <p class="text-gr">Latest Posts</p>
                </div>
                <div class="row d-flex justify-content-center  mb-lg-5 row-gap-md-5 mb-sm-5">
                    <div class="col-xl-4 col-lg-5 col-md-6 blog-wd mb-sm-5">
                        <div class="card rounded-0">
                            <img src={b1} class="card-img-top rounded-0" alt="..."/>
                            <div class="card-body " >
                                <h5 class="card-title mb-3">At vero eos</h5>
                                <p class="card-text text-gr lh-lg">Cras ultricies ligula sed magna dictum porta auris
                                    blandita.</p>
                                <a href="#" class="text-decoration-none font-color">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-5 col-md-6 blog-wd mb-sm-5">
                        <div class="card rounded-0">
                            <img src={b2} class="card-img-top rounded-0" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title mb-3">Tccus et ius</h5>
                                <p class="card-text text-gr lh-lg">Cras ultricies ligula sed magna dictum porta auris
                                    blandita.</p>
                                <a href="#" class="text-decoration-none font-color mb-5">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-5  col-md-6 blog-wd mb-sm-5">
                        <div class="card rounded-0">
                            <div class="card-body  shadow-lg pb " style={{height: '455px'}}>
                                <h5 class="card-title my-xl-3 my-lg-2">Sed do eiusmod tempor auris incididunt ut.</h5>
                                <p class="card-text text-gr font-color my-xl-3 my-lg-2 pb-3">Jan 06 2019</p>
                                <h5 class="card-title my-xl-3 my-lg-2">Sed do eiusmod tempor auris incididunt ut.</h5>
                                <p class="card-text text-gr font-color my-xl-3 my-lg-2 pb-3">Jan 06 2019</p>
                                <h5 class="card-title my-xl-3 my-lg-2">Sed do eiusmod tempor auris incididunt ut.</h5>
                                <p class="card-text text-gr font-color my-xl-3 my-lg-2 pb-3">Jan 06 2019</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Blog