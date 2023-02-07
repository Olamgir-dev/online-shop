import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setProducts } from '../redux/reducers/allProdactReducer';
import ProductCard from '../components/ProductCard';
function AllProducts() {
    const allProducts = useSelector(state => state.product.array)
    const dispatch = useDispatch();
    const [isLoded, setIsLoded] = useState(false)
    useEffect(() => {
        axios
            .get(`https://fakestoreapi.com/products`)
            .then((res) => {
                dispatch(setProducts(res.data))
                setIsLoded(true)
            })
        return () => {
            setIsLoded(false)
        }
    }, [])

    return (
        <>
            {isLoded ?
                (<div className="container mt-5">
                    <div className="row">
                        {
                            allProducts.map(allProduct => {
                                return <ProductCard key={allProduct.id} data={allProduct} />
                            })
                        }
                    </div>
                </div>)
                :
                (<h1 style={{ height: "80vh" }} className='w-100'>
                    <i style={{ position: "fixed", top: "45vh", left: "50vw", zIndex: 12, fontSize: "100px" }} className='bx bx-loader bx-spin bx-flip-horizontal' ></i>
                </h1>)
            }
        </>
    )
}

export default AllProducts