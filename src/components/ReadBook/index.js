"use client";
import React, { useState } from "react";
import { Book1 } from "../../../public/samplepdf.pdf";
import { Document, Page, StyleSheet } from "react-pdf/dist/esm/entry.webpack5";
import Arrow from "../../../public/icons/arrow.svg";
import "react-pdf/dist/esm/Page/TextLayer.css";
import styles from "./readbook.module.css";
import Link from "next/link";

// const options = {
//   cMapUrl: "cmaps/",
//   cMapPacked: true,
//   standardFontDataUrl: "standard_fonts/",
// };

const ReadBook = () => {
  const [file, setFile] = useState(
    "https://ik.imagekit.io/p99x3nxgz/bhagvatgita.pdf?updatedAt=1679923614120"
  );
  // const [numPages, setNumPages] = useState(null);

  // function onFileChange(event) {
  //   setFile(event.target.files[0]);
  // }

  // function onDocumentLoadSuccess({ numPages: nextNumPages }) {
  //   setNumPages(nextNumPages);
  // }

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offSet) {
    setPageNumber((prevPageNumber) => prevPageNumber + offSet);
  }

  function changePageBack() {
    changePage(-1);
  }

  function changePageNext() {
    changePage(+1);
  }

  return (
    <div className={styles.readbook}>
      <header className="App-header">
        <div className={styles.readbook__heading}>
          <Link href="/readbook/1">
            <span className={styles.readbook__span}>
              <Arrow className="rotate-180 w-2" />
            </span>
          </Link>
          <div className={styles.readbook__chep}>
            <p>Chep 02</p> | <p>Bhagvat Puran</p>
          </div>
        </div>
        <div className={styles.readbook__pagenum}>
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
        </div>
        <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
          <div className={styles.readbook__page}>
            <Page
              wrap={false}
              size="A1"
              style={{ backgroundColor: "tomato" }}
              width={window.innerWidth}
              className={styles.readbook__reactpdfPage}
              pageNumber={pageNumber}
              renderTextLayer={false}
            />
          </div>
        </Document>
        <div className={styles.readbook__page2}>
          <Arrow onClick={changePageBack} className="rotate-180 w-2" />
          <div>
            <span className="font-bold">Page {pageNumber}</span> of {numPages}
          </div>
          <Arrow onClick={changePageNext} className="w-2" />
        </div>
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
