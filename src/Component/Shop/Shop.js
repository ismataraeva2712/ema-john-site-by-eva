import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart, } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import useProduct from './../../Hook/UseProduct/UseProduct';
import { Link } from 'react-router-dom';
const Shop = () => {
    const [products, setProducts] = useProduct()
    const [cart, setCart] = useState([])

    useEffect(() => {
        const storedCart = getStoredCart()

        const savedCart = []
        for (const id in storedCart) {
            console.log(id)
            const addedProduct = products.find(product => product.id === id)

            if (addedProduct) {
                console.log(addedProduct)
                const quantity = storedCart[id]
                addedProduct.quantity = quantity
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart)
    }, [products])
    const handleAddToCart = (product) => {
        // console.log(product)
        let newCart = []

        const exist = cart.find(item => item.id === product.id)
        if (!exist) {
            product.quantity = 1
            newCart = [...cart, product]
        }
        else {
            const rest = cart.filter(item => item.id !== product.id)
            exist.quantity = exist.quantity + 1
            newCart = [...rest, exist]
        }
        // const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.id)
    }
    return (
        <div className='shop-container'>
            <div className="prduct-container">
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/orders"><button>review order</button></Link>

                </Cart>

            </div>
        </div>
    );
};

export default Shop;