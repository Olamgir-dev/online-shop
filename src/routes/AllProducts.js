import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setProducts } from '../redux/reducers/allProdactReducer';
import ProductCard from '../components/ProductCard';
function AllProducts() {
    const allProducts = useSelector(state => state.product.array)
    // console.log(allProducts);
    const dispatch = useDispatch();
    const [isLoded, setIsLoded] = useState(false);
    const [sortBy, setSortBy] = useState(false);
  
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
    // const productSort =isLoded && allProducts.sort((a,b)=>{ return  a.category-b.category});
    // console.log(productSort)
    // console.log("  adfsdf");
    // console.log(allProducts)
    return (
        <>
            {isLoded ?
                (<div className="container mt-5">
                    <div className="row">
                        <div className="pt-4 d-flex justify-content-end">
                            <div className="form-check form-switch">
                                <input onInput={()=>setSortBy(!sortBy)} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                                    <label className="form-check-label" for="flexSwitchCheckDefault">Sort</label>
                            </div>
                        </div>
                        <>
                            {
                                allProducts?.map(allProduct => {
                                    return <ProductCard key={allProduct.id} data={allProduct} />
                                })
                            }
                        </>
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