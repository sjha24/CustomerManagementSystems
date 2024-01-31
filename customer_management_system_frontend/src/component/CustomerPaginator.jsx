import React from 'react'

const CustomerPaginator = ({currentPage,totalPages,onPageChange}) => {
    const pageNumber = Array.from({length:totalPages},(_,i)=>i+1);
    return (
        <nav>
            <ul className='pagination jsutify-content-center'>
                {pageNumber.map((pageNumber)=>(
                    <li key={pageNumber}
                        className={`page-item ${currentPage===pageNumber ? "active" :""}`}
                    >
                        <button className='page-link' onClick={()=>onPageChange(pageNumber)}>
                            {pageNumber}
                        </button>
                    </li>
                ))}

            </ul>
        </nav>
    )
}

export default CustomerPaginator