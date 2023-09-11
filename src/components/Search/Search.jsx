import React from 'react'

const Search = () => {
  return (
    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', paddingLeft:'55px', paddingRight:'55px'}}>
        <div className="leftside">
            <h3>Kataloq</h3>
        </div>
        <div className="inputbox">
            <input type="text" name="" id="" placeholder='Burada axtar' style={{width:800,padding:10,borderRadius:15}}/>
        </div>
        <div className="icons">
            <a href="http://localhost:3001/basket">Sebet</a>
            <a href="">\*/</a>
            <a href="">/|\</a>
        </div>
    </div>
  )
}

export default Search