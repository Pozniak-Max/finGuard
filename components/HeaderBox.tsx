import React from 'react'

const HeaderBox = ({type="title", user, title, subtext}: HeaderBoxProps) => {
  return (
    <div className='header-box'>
        <h1 className='header-box-title'>
          {title}
          {type === 'greeting' && (
            <span className='text-bankGradient'>
              &nbsp;{user}
            </span>
          )}
        </h1>
        <p className='hader-box-subtext'>{subtext}</p>
    </div>
  )
}

export default HeaderBox