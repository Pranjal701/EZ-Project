import React from 'react'

function NavBar() {
  return (
    //  NavBar Container

    <div className="sticky top-0 left-0 w-full z-50 flex items-center justify-between p-4 bg-transparent">
        <img 
            src="MyICON.png" alt="ICON" className='w-32 h-12' 
        />
        <img src="img3.png" alt="Menu icon" className='w-6 h-5 cursor-pointer' />
        
    </div>

  )
}

export default NavBar
