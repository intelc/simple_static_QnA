import React from 'react'

const Header = ({text}) => {
    return (
        <div>
            <h1 className="font-weight-bold" style={{color:'white'}}>{text}</h1>
        </div>
    )
}

export default Header
