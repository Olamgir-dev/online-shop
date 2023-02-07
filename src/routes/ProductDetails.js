import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { removeProduct, setSelectorProdact } from '../redux/reducers/selectProdact';
function ProductDetails() {
    const selectrProduct = useSelector(state => state.selectProduct.obj)
    const dispatch = useDispatch();
    const { productId } = useParams()
    const [isLoded, setIsLoded] = useState(false);
    const [counter, setCounter] = useState(1);
    const [isPurchase, setIsPurchase] = useState(false)
    useEffect(() => {
        axios
            .get(`https://fakestoreapi.com/products/${productId}`)
            .then(res => {
                dispatch(setSelectorProdact(res.data))
                setIsLoded(true)
            })
        return () => {
            dispatch(removeProduct())
            setIsLoded(false)
        }
    }, [])
    const [rate] = useState([1, 2, 3, 4, 5])
    let percentage = selectrProduct.price * counter / 10;
    return (
        <>
            {isLoded ?
                (
                    <>
                        <div style={{ marginTop: 80 }} className="container">
                            <div className="row">
                                <div className="col-xl-6 border">
                                    <img style={{ height: 600,width:"100%", objectFit: 'cover' }} className='rounded' src={selectrProduct.image} alt="404" />
                                </div>
                                <div className="col-xl-6 border p-3">
                                    <div >
                                        <h5 className='card-title h1 fw-normal lh-sm'>
                                            {selectrProduct.title}
                                        </h5>

                                        <h5>
                                            {selectrProduct.description}
                                        </h5>
                                        <div style={{ borderRadus: '12' }} className="forim d-flex border pt-2 ps-2 align-center">
                                            <button
                                                onClick={() => setCounter(counter - 1)}
                                                type="button"
                                                className="btn h5 btn-outline-secondary"
                                            >-</button>
                                            <span className='h5 px-3'>{counter}</span>
                                            <button
                                                onClick={() => setCounter(counter + 1)}
                                                type="button"
                                                className="btn h5  btn-outline-secondary"
                                            >
                                                +
                                            </button>

                                            {
                                                isPurchase ? <div className='card col-xl-6 p-3' style={{

                                                    position: "fixed",
                                                    top: "50%",
                                                    left: "50%",
                                                    transform: "translate(-50%, -50%)",
                                                    bacgrauntColor: 'red'
                                                }}>
                                                    <h5 style={{ cursor: 'pointor' }} onClick={() => setIsPurchase(false)} className='text-end btn'><i class='bx fs-5 bxs-x-circle'></i></h5>
                                                    <h5 className='text-center'>{selectrProduct.title}</h5>
                                                    <div className="row">
                                                        <div className="col-xl-6 p-3 bg-light">
                                                            <p>Total price: {selectrProduct.price * counter}$</p>
                                                            <p className='border-bottom' >Payment system commission: {percentage}$</p>
                                                            <h6 class>Common: {selectrProduct.price * counter + percentage}$</h6>
                                                        </div>
                                                        <div className="col-xl-6">
                                                            <div className="input-group">
                                                                <span className="input-group-text" id="inputGroup-sizing-default">Credit card</span>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    aria-label="Sizing example input"
                                                                    placeholder="0000 0000 0000 0000"
                                                                    pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}"
                                                                    aria-describedby="inputGroup-sizing-default" />
                                                            </div>
                                                            <div class="input-group mt-4 ">
                                                                <span class="input-group-text" id="inputGroup-sizing-default">Validity period</span>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    aria-label="Sizing example input"
                                                                    placeholder="00/00 "
                                                                    pattern="[0-9]{2}/[0-9]{2}"
                                                                    aria-describedby="inputGroup-sizing-default" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button onClick={() => setIsPurchase(false)} className='btn h5 btn-outline-secondary' > Purchase </button>
                                                </div> : <></>
                                            }
                                            <h5 className="px-5">Total price : {selectrProduct.price * counter}$</h5>
                                            <button onClick={() => setIsPurchase(true)} className='btn h5 btn-outline-secondary'>Purchase</button>
                                        </div>
                                    </div>
                                    <div className="rating p-3 d-flex align-end mb-0">
                                        <div className='fs-4 px-5'>
                                            {
                                                rate.map((val, index) => {
                                                    const num = selectrProduct.rating.rate - Math.floor(selectrProduct.rating.rate);
                                                    let number;
                                                    number = (num >= 0.5 ? Math.ceil(selectrProduct.rating.rate) : Math.floor(selectrProduct.rating.rate));
                                                    console.log(number)
                                                    if (val <= number) {
                                                        return <i style={{ color: '#e6bc19' }} className='bx bxs-star'></i>
                                                    }
                                                    else {
                                                        return <i style={{ color: '#e6bc19' }} className='bx bx-star'></i>
                                                    }
                                                })
                                            }

                                            {selectrProduct.rating.rate}
                                        </div>
                                        <span className='fs-4'><i className='bx bx-show-alt'></i> {selectrProduct.rating.count}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
                :
                (<h1 style={{ height: "80vh" }} className='w-100'>
                    <i
                        style={{
                            position: "fixed",
                            top: "50%",
                            left: "50%",
                            zIndex: 12,
                            fontSize: "100px"
                        }}
                        className='bx bx-loader bx-spin bx-flip-horizontal'
                    ></i>
                </h1>)
            }
        </>
    )
}

export default ProductDetails