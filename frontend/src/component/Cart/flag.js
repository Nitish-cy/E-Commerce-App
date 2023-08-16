import React, { Fragment } from 'react'
import './flag.css'
const flag = () => {
  return (
   <Fragment>
     <div class="wrapper">
        <div class="stick"></div>
        <div class="flag">
            <div class="wave"></div>
            <div class="top"></div>
            <div class="middle">
                <div class="wheel">
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                </div>
            </div>
            <div class="bottom"></div>
        </div>
    </div>
   </Fragment>
  )
}

export default flag
