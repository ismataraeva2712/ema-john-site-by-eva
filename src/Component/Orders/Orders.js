import React from 'react';
import useProduct from './../../Hook/UseProduct/UseProduct';
import useCart from './../../Hook/UseCart/UseCart';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';
import { useNavigate } from 'react-router-dom';


const Orders = () => {
    const [products, setProducts] = useProduct()
    const [cart, setCart] = useCart(products)
    let nevigate = useNavigate()
    const handleRemove = product => {
        const rest = cart.filter(pd => pd.id !== product.id)
        setCart(rest)
        removeFromDb(product.id)
    }
    return (
        <div className='shop-container'>
            <div className="">
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemove={handleRemove}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>

                    <button onClick={() => nevigate('/shipping')}>proceed Shipping</button>

                </Cart>

            </div>

        </div>
    );
};

export default Orders;