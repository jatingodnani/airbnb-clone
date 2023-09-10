import React from 'react'

function Heading(
  {title,
  subtitle,
  center}) {
  return (
    <div className={center ? 'text-center' : 'text-start'}>
        <p className='font-2xl font-bold'>{title}</p>
        <p className='font-xl font-bold'>{subtitle?subtitle:""} </p>
    </div>
  )
}

export default Heading