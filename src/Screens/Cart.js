import React from 'react'
import Navbar from '../Components/Navbar'
import { useSelector } from 'react-redux'
import { AiOutlineDelete } from 'react-icons/ai'
import { useDispatch } from 'react-redux'

export default function Cart() {


    const dispatch = useDispatch();
    const deleteHandler = async (id) => {
        dispatch({ type: "deleteFromCart", payload: id });
    }

    // const increment = (id) =>{
    //     dispatch({type:"addToCart",payload:{id}})
    // }

    // const decrement = (id) =>{
    //     dispatch({type:"decrement",payload:id})
    // }

    const { cartItem } = useSelector((state) => state.cart)
    if (cartItem.length === 0) {
        return (
            <>
                <Navbar />
                <h1 className='d-flex justify-content-center align-item-center'>No Items Yet</h1>
            </>
        )
    }

    return (
        <div>
            <div><Navbar /></div>
            <div className='container m-auto' >
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Qty</th>
                            <th scope='col'>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartItem.map((i, index) => (
                                <>
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{i.name}</td>
                                        <td>{i.qty}</td>
                                        <td>{(i.price) * (i.qty)}</td>
                                        <td><AiOutlineDelete onClick={() => deleteHandler(i.id)} type='button' className='btn p-0' /></td>
                                    </tr>
                                </>
                            ))}


                    </tbody>
                </table>
            </div>

        </div>
    )
}
