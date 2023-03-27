import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function RouteDetails(props) {
    let data = props.data;
    const [rate] = useState([1, 2, 3, 4, 5])
    return (
        <>
            <div className="  col-md-6 col-lg-4  col-xl-3 mt-4">
                <div className="card">
                    <img style={{ height: "280px" }} className='card-head  rounded  p-3' src={data.image} alt="404" />
                    <div className="card-body">
                        <h5 className='card-title'>{data.title}</h5>

                        <div className="d-flex justify-content-between align-items-center">
                            <span className='fs-6 '><i className='bx bx-show-alt'></i> {data.rating.count}</span>
                            <span className='fs-6'>{
                                rate.map((val) => {
                                    const num = data.rating.rate - Math.floor(data.rating.rate);
                                    let number;
                                    number = (num >= 0.5 ? Math.ceil(data.rating.rate) : Math.floor(data.rating.rate));

                                    if (val <= number) {
                                        return <i style={{ color: '#e6bc19' }} className='bx bxs-star'></i>
                                    }
                                    else {
                                        return <i style={{ color: '#e6bc19' }} className='bx bx-star'></i>
                                    }
                                })
                            }
                                {data.rating.rate}
                            </span>

                            <Link className='nav-link' to={`/${data.id}`}>
                                <button
                                    type="button"
                                    className="btn  btn-outline-secondary"
                                >Buy</button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default RouteDetails