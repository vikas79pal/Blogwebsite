import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import "./Pagination.css"

const Pagination = () => {
  const {page,totalPage,setPage,handlePageChange}=useContext(AppContext)
  const nextPageHandler=()=>{
    
      handlePageChange(page+1)

    
    
  }
  const prevPageHandler=()=>{
    
    handlePageChange(page-1)

  
  
}
  return (
    <div className='pagination'>

<div className='leftbtn'>

{/* if page between 1 and 6 excluding 1 and 6 */}
{
  page>1 && page<totalPage && <><button onClick={prevPageHandler} className='btn'>Previous</button> <button onClick={nextPageHandler} className='btn'>Next</button></>
  
}
{/* if it is the first page then show only next button */}
{  page===1 && <button onClick={nextPageHandler} className='btn'>Next</button>}

{/* if it is the last page then show only previous button */}
{page===totalPage && <button className='btn' onClick={prevPageHandler}>Previous</button>}
  </div>
<div className='page'> Page {page} of {totalPage}</div>
    </div>
  )
}

export default Pagination