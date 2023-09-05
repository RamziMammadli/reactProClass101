import React from 'react'

const Main = () => {
  return (
    <div style={{display:'flex', alignItems:'center', width:'100%', justifyContent:'space-evenly', paddingTop:'25px'}}>
        <div className="leftSide" style={{width:'20%', backgroundColor:'yellow', height:500}}></div>
        <div className="middle" style={{width:'50%', backgroundColor:'green', height:500}}></div>
        <div className="rightSide" style={{width:'20%', backgroundColor:'yellow', height:500}}></div>
    </div>
  )
}

export default Main