import React from 'react'
import Navbar from '../header/Navbar'

function StandardLayout({ children}) {
  return (
    <div>
      <Navbar />
        {children}
    </div>
  )
}

export default StandardLayout
