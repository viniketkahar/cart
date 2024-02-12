import React from 'react'
import { Link } from 'react-router-dom'
import { Badge } from 'react-bootstrap'
import { FiShoppingCart } from 'react-icons/fi'
import { useSelector } from 'react-redux'

export default function Navbar() {

    const { cartItem } = useSelector((store) => store.cart)

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Cart</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav  me-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                        </ul>

                        <div className='d-flex'>
                            <Link className="text-white btn mx-1" to="/cart"><FiShoppingCart /> <Badge pill bg='danger'>{cartItem.length}</Badge> </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
