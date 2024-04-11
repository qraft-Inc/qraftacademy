import React from 'react'

const Navigation = () => {
  const linkStyle = ""
  return (
    <nav className="grid grid-cols-7 grid-rows-5 gap-4 border-primary-400 ">
      <div className="col-span-2">Qraft</div>
      <div className="col-start-3 text-center text-primary-400  uppercase font-heading"><p className="">Research</p></div>
      <div className="col-start-4 ">Technologists</div>
      <div className="col-start-5 text-primary-400  uppercase font-heading">entreprenuers</div>
      <div className="col-start-6 text-primary-400  uppercase font-heading">about</div>
      <div className="col-start-7 bg-primary-100 uppercase debug">login</div>
    </nav>
  )
}

export default Navigation

