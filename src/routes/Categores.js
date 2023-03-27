import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'
function Categores() {
  const [categories, setCategories] = useState([])
  const [isLoded, setIsLoded] = useState(false)

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/categories`)
      .then(res => {
        setCategories(res.data);
        setIsLoded(true)
      })

    return () => {
      setIsLoded(false)
    }
  }, [])
  return (
    <>
      {isLoded ? (<div style={{ marginTop: "70px" }} className="container ">
        <div className="row">
          <div className="col-xl-3"></div>
          <div className="col-xl-6">
            <table className='table table-hover'>
              <thead>
                <tr>
                  <th className='col'>Categores</th>
                </tr>
              </thead>
              <tbody>
                {
                  categories.map(element => {
                    return < tr>
                      <Link className='nav-link col' to={`${element}`}>{element}</Link>
                    </tr>
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>)
        : (<h1 style={{ height: "80vh" }} className='w-100'>
          <i style={{ position: "fixed", top: "45vh", left: "50vw", zIndex: 12, fontSize: "100px" }} className='bx bx-loader bx-spin bx-flip-horizontal' ></i>
        </h1>)
      }
    </>
  )
}

export default Categores