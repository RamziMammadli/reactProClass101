import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { ordersThunk } from '../../api/reducer/getOrders';

const Orders = () => {

    const orderData = useSelector((state) => state.order.orders)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(ordersThunk())
    }, [])

  return (
    <div>
        {orderData.map((item) => {
            return <div style={{ border: '1px solid red', borderRadius:15, marginTop:25}}>
                <p>{item.customerId}</p>
                <p>{item.shipName}</p>
                <p>{item.shipAddress.country}</p>
                
            </div>
        })}
    </div>
  )
}

export default Orders