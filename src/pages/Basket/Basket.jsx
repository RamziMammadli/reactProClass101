import React, { useEffect, useState } from 'react'
import Top from '../../components/Top/Top'
import AddBasketButton from '../../components/Buttons/AddBasketButton'
import ProductBox from '../../components/ProductBox/ProductBox'
import axios from 'axios'

const Basket = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/api/basket')
    .then(res => {
      setData(res.data)
    })
  })

  return (
    <div>
      <Top/>
      <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
        {data &&
          data.map((item) => {
            return <div style={{border: '1px solid gray', marginTop: '20px', borderRadius:20, marginLeft:'20px'}}> <ProductBox product={item} /> <AddBasketButton/> </div>;
          })}
          
      </div>
    </div>
  )
}

export default Basket