import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Header() {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/categories`)
      .then(res => {
        setCategories(res.data);
      })
  }, [])
 console.log(categories);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top ">
        <div className="container">
          <Link className="navbar-brand" to='/'>
            <img
              className=' bg-body-tertiary'
              style={{ height: 30 }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD7j0SBzjy4-lmyhs3qFH8mMRQeYFvJC2w1-uV6C-QtW32aPtZ6Fp2lqeUUTRw9u74h_w&usqp=CAU"
              alt="" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>

            </ul>

            <ul className="navbar-nav gap-3" >
              { categories.map(element => {
                return < li className='nav-item' value="electronics">
                  <Link className='nav-link' to={element}>{element}</Link>
                </li>
              })
              }
            </ul>

          </div>
        </div>
      </nav>
    </>
  )
}

export default Header