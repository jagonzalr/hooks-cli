
'use strict'

import React from 'react'

// import { useTemplate } from '../src/index' #import your own hook

import './styles/tailwind.css'
import './styles/index.scss'

export default () => {
  return (
    <div className='flex h-screen'>
      <div className='m-auto'>
        <h1 className='font-bold text-3xl flex-1'>useTemplate</h1>
      </div>
    </div>
  )
}