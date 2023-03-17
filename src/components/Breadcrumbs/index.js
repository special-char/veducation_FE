"use client";
import React, { useState } from "react";
import { Document, Page } from "public/pdf/pdfbook.pdf";
// import { useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offSet);
  }

  function changePageBack() {
    changePage(-1);
  }
  function changePageNext() {
    changePage(+1);
  }
  return (
    <div className="App">
      <center>
        <div>
          <Document onLoadSuccess={onDocumentLoadSuccess} />
          {Array.from(new Array(numPages), (el, next) => (
            <page key={`page_${index + 1}`} pageNumber={index + 1} />
          ))}
        </div>
      </center>
    </div>
  );
};

export default Breadcrumbs;
