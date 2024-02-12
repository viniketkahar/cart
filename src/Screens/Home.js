import React from 'react'
import Navbar from '../Components/Navbar'
import Card from '../Components/Card'

export default function Home() {

    const items = [
        {
            id: 1,
            name: "Shoes",
            imgSrc: "https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.jpg?s=612x612&w=0&k=20&c=A3w_a9q3Gz-tWkQL6K00xu7UHdN5LLZefzPDp-wNkSU=",
            price: 1200,
            desc: "Blue color shoes which are very comfortable to wear. You'll love these shoes after purchasing it.",
            qty:1
        },
        {
            id: 2,
            name: "Camera",
            imgSrc: "https://i.pinimg.com/originals/e7/5d/db/e75ddbda351d44e24b6b8099fa200aad.jpg",
            price: 900,
            desc: "A camera you can take anywhere with you. It is waterproof and can click your photos inside water also.",
            qty:1
        },
        {
            id: 3,
            name: "Steel Appliances",
            imgSrc: "https://upload.wikimedia.org/wikipedia/commons/6/67/Breville.jpg",
            price: 2000,
            desc: "Complete set og kitchen appliances made of stainless steel. It can help you iun several houseold works.",
            qty:1
        }]

    return (
        <div>
            <div><Navbar /></div>
            <div className='d-flex justify-content-center'>
                {items.map((i) => {
                    return (
                        <Card key={i.id} prop={i}></Card>
                    )
                })}
            </div>
        </div>
    )
}
