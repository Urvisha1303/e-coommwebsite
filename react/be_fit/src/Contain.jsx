import React from 'react'
import containe1 from './image/about2.jpg'

const Contain = () => {
  return (
    <>
    <div class="container py-5  my-5 px-5 px-sm-0" style={{height: 'auto'}}>
            <h1 class="text-center fw-bolder mb-4"> Welcome to Our Website </h1>
            <p class="d-flex justify-content-center" style={{color: '#999'}}><span
                    class=" text-center mb-5 w-100 mx-5 lh-lg mx-md-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip
                    ex ea commodo consequat.
                </span></p>
            <img src={containe1} alt="" class="w-100 px-5 px-sm-3" />
        </div>
    </>
  )
}

export default Contain