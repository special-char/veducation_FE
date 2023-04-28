"use client";
import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import Arrow from "../../../public/icons/arrow.svg";
// import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import styles from "./readbook.module.css";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import PdfView from "@/app/pdff";

// const options = {
//   cMapUrl: "cmaps/",
//   cMapPacked: true,
//   standardFontDataUrl: "standard_fonts/",
// };

const ReadBook = ({ book, ...props }) => {
  const [file, setFile] = useState(
    // "https://ik.imagekit.io/p99x3nxgz/bhagvatgita.pdf?updatedAt=1679923614120"
    `${book?.data?.attributes?.pdf?.data?.attributes?.url}`
  );
  // console.log(book?.data?.attributes?.posterImage?.data?.attributes ,"Readboook");
  // const [numPages, setNumPages] = useState(null);

  // function onFileChange(event) {
  //   setFile(event.target.files[0]);
  // }

  // function onDocumentLoadSuccess({ numPages: nextNumPages }) {
  //   setNumPages(nextNumPages);
  // }
  console.log(book?.data?.attributes?.title,"whatttt");

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offSet) {
    setPageNumber((prevPageNumber) => {
      if (prevPageNumber === numPages) return prevPageNumber;
      return prevPageNumber + offSet;
    });
  }

  function changePageBack() {
    if (pageNumber !== 1) {
      changePage(-1);
    }
  }

  function changePageNext() {
    changePage(+1);
  }

  return (
    <div className={styles.readbook}>
      <header className="App-header">
        <div className="flex items-center gap-3 py-5 px-4 border-b border-neutral-250">
          <div className="flex gap-2 font-bold text-base py-2">
            <p>{book?.data?.attributes?.pdf?.data?.attributes?.name}</p>
          </div>
        </div>
        {/* <div className="flex justify-between text-sm2 w-full py-2 px-4">
          {pageNumber > 1 && (
            <button
              className="flex items-center gap-2"
              onClick={changePageBack}
            >
              <Arrow className="rotate-180 w-1" /> Previous Page
            </button>
          )}
          {pageNumber < numPages && (
            <button
              className="flex items-center gap-2"
              onClick={changePageNext}
            >
              Next Page <Arrow className="w-1" />
            </button>
          )}
        </div> */}

        <PdfView pdfData={book?.data?.attributes?.pdfData} pdfUrl={book?.data?.attributes?.pdfUrl} posterUrl={book?.data?.attributes?.posterUrl} pdfTitle={book?.data?.attributes?.title} />
        {/* <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
          <div className="overflow-visible">
            <Page
              wrap={false}
              size="A4"
              // style={{ backgroundColor: "tomato" }}
              width={window.innerWidth}
              className={styles.readbook__reactpdfPage}
              pageNumber={pageNumber}
              renderTextLayer={false}
            />
          </div>
        </Document> */}
        {/* <div className="fixed bottom-20 bg-background w-full flex items-center justify-end gap-6 text-base pt-3 px-5">
          <Arrow onClick={changePageBack} className="rotate-180 w-2" />
          <div>
            <span className="font-bold">Page {pageNumber}</span> of {numPages}
          </div>
          <Arrow onClick={changePageNext} className="w-2" />
        </div> */}
        {/* <div className="absolute w-full">
          {pageNumber > 1 && (
            <button onClick={changePageBack}>Previous Page</button>
          )}
          {pageNumber < numPages && (
            <button onClick={changePageNext}>Next Page</button>
          )}
        </div> */}
      </header>
    </div>
  );
};

export default ReadBook;
