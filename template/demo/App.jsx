
'use strict'

import React from 'react'

// import { useCustomHook } from '../src/index' #import your own hook

import './styles/tailwind.css'
import './styles/index.scss'

export default () => {
  return (
    <div className='flex h-screen'>
      <div className='m-auto'>
        <h1 className='font-bold text-3xl flex-1'>[useCustomHookName]</h1>
      </div>
    </div>
  )
}