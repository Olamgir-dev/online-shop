import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import RouteDetails from './RouteDetails'
function Categore() {
  const { categore } = useParams()
  console.log(categore)
  const [isLoded, setIsLoded] = useState(false)
  const [data, setData] = useState([])
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${categore}`)
      .then(res => {
        setData(res.data)
        setIsLoded(true)
      })
    return () => {
      setIsLoded(false)
    }
  }, [])
  return (
    <>
      {isLoded ?
        <div className="container mt-5">
          <h1 className=' pt-4 text-center text-capitalize'>{categore}</h1>
          <div className="row">
            {data.map((data,index) => <RouteDetails data={data} key={index} />)}
          </div>
        </div> :
        <div style={{ height: "80vh" }} className='w-100'>
          <i style={{ position: "fixed", top: "45vh", left: "50vw", zIndex: 12, fontSize: "100px" }} className='bx bx-loader bx-spin bx-flip-horizontal' ></i>
        </div>}
    </>
  )
}

export default Categore