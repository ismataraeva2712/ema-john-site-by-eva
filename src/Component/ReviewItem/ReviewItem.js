import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './REviewitem.css'
const ReviewItem = (props) => {
    const { handleRemove, product } = props
    const { name, price, img, shipping, quantity } = product
    return (
        <div className='review-container'>

            <div>
                <img src={img} alt="" srcset="" />
            </div>
            <div className="details-container">
                <div className='review-details'>
                    <p >{name}</p>
                    <p>price: {price}</p>
                    <p>shipping : {shipping}</p>
                    <p>quantity : {quantity}</p>
                </div>
                <div>
                    <button onClick={() => handleRemove(product)}>
                        <FontAwesomeIcon className='delet' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default ReviewItem;