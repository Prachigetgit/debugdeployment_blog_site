import React from 'react'

import { BsFacebook } from 'react-icons/bs'
import { AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai'
export const Footer = () => {
  return (
    <>
        <footer className='boxItems'>
            <div className='container flex'>
                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              <div className='social'>
                <BsFacebook className='icon' />
                <AiFillTwitterCircle className='icon' />
                <AiFillLinkedin className='icon' />
              </div>
            
            </div>
        </footer>
    </>
  )
}

