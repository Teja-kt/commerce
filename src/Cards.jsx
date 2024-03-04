import React, { useEffect, useState } from 'react'
import "./Cards.css"

const Cards = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        showItems()
    },[])

    const url = "https://fakestoreapi.com/products"
    const showItems = async () => {
        try {
            const response = await fetch(url)
            const dataFetched = await response.json()
            setData(dataFetched)
            // console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    const addToCart = (id) => {
        console.log(id);
    }

  return (
    <div onLoad={showItems}>
        <div className='allItems'>
            {data.map((card) => (
                <div className='products'>
                    <img src={card.image} className='im' alt="images"/>
                    <h4 className='title'>{card.title}</h4>
                    <p>Price : {card.price}</p>
                    <button className='btns' onClick={() => {addToCart(card.id)}}>Add</button>
                </div>
                
            ))}
        </div>
    </div>
  )
}

export default Cards