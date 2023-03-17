"use client";
// import React, { useState } from "react";
// import document from "public/pdf/pdfbook.pdf";
// import { Document, Page } from "react-pdf";
// // import { useLocation } from "react-router-dom";

// const Breadcrumbs = () => {
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//     setPageNumber(1);
//   }

//   function changePage(offset) {
//     setPageNumber((prevPageNumber) => prevPageNumber + offSet);
//   }

//   function changePageBack() {
//     changePage(-1);
//   }
//   function changePageNext() {
//     changePage(+1);
//   }
//   return (
//     <div className="App">
//       <div>
//         <Document />
//         {Array.from(new Array(numPages), (el, next) => (
//           <page key={`page_${index + 1}`} pageNumber={index + 1} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Breadcrumbs;
import React from "react";
import { pdfjs, Document, Page } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFViewer = () => {
  return (
    <div className="">
      <Document
        file={
          "https://ik.imagekit.io/4w8k3nskbx/Harsh_Patel_Resume.pdf?updatedAt=1679046965703"
        }
      >
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

export default PDFViewer;
