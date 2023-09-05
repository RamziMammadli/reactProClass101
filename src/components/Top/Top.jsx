import React from 'react'

const Top = () => {
  return (
    <div style={{display: 'flex', paddingLeft:'55px', paddingRight: '55px ', justifyContent:'space-between',  borderBottom: '1px solid gray'}}>
        <div className="logo"><h3>KontaktHOME</h3></div>
        <div className="navs" style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
            <a href="" style={{textDecoration:'none'}}>Mağazalar</a> 
            <a href="" style={{textDecoration:'none'}}>Aksiya</a>
            <a href="" style={{textDecoration:'none'}}>Xidmətlər</a>
        </div>
    </div>
  )
}

export default Top