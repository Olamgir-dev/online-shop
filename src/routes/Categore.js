import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import RouteDetails from './RouteDetails'
function Categore() {
  const { categore } = useParams()
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
          <div className="row">
            {data.map(data => <RouteDetails data={data} key={data.id} />)}
          </div>
        </div> :
        <h1 style={{ height: "80vh" }} className='w-100'>
          <i style={{ position: "fixed", top: "45vh", left: "50vw", zIndex: 12, fontSize: "100px" }} className='bx bx-loader bx-spin bx-flip-horizontal' ></i>
        </h1>
      }
    </>
  )
}

export default Categore