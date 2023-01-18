import React from "react";

function Pagination({ currentPage, setCurrentPage, pages }) {
  //Get the array of page numbers
  const pageNumbers = [...Array(pages + 1).keys()].slice(1);
  // Handle next button to go to the next page
  const nextPage = () => {
    if(currentPage !== pages) setCurrentPage(currentPage + 1)  
    }

  // Handle previou button to go to the previous button
  const prevPage = () => {
    if(currentPage !== 1) setCurrentPage(currentPage - 1)    
    }
  return (
    <div>
      <nav aria-label="...">
        <ul className="pagination">
          <li className="page-item disabled">
            <a className="page-link" onClick={prevPage}>Previous</a>
          </li>
          {/* map through the page numbers to display each page number */}
          {pageNumbers.map(pageNumber=>{
            return (<li className={`page-item ${pageNumber === currentPage ? 'active': ''}`} key={pageNumber}>
                <a className="page-link" onClick={()=>setCurrentPage(pageNumber)}>
                {pageNumber}
                </a>
                </li>)
          })}
          
          <li className="page-item">
            <a className="page-link" onClick={nextPage}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
