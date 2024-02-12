import React from 'react'
import { useDispatch } from 'react-redux';
import {toast} from 'react-hot-toast'

export default function Card(props) {
    const dispatch = useDispatch();
    const handleAddToCart = async () => {
        const data = props.prop;
        toast.success("Added To Cart")
        dispatch({type:"addToCart",payload:data})
    }
    return (
        <div>
            <div className="card m-5" style={{ "width": "18rem", "maxHeight": "360px" }}>
                <img src={props.prop.imgSrc} className="card-img-top" alt="..."
                    style={{ "height": "160px", "objectFit": "fill" }} />
                <div className="card-body">
                    <h5 className="card-title">{props.prop.name}</h5>
                    <p className="card-text">{props.prop.desc}</p>
                    <div className='d-flex justify-content-around' >
                        <h4>&#8377;{props.prop.price}</h4>
                        <button className='btn bg-success justify-center' onClick={handleAddToCart}>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
