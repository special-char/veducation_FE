"use client";
// import { useState } from "react";
// import { Document, Page, pdfjs } from "react-pdf";
// import ReactPaginate from "react-paginate";

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// const MyPdfViewer = () => {
//   const [chapterIndex, setChapterIndex] = useState(0);
//   const [pageIndex, setPageIndex] = useState(0);

//   const content = [
//     { title: "Chapter 1", pages: [1, 2, 3] },
//     { title: "Chapter 2", pages: [4, 5, 6] },
//     { title: "Chapter 3", pages: [7, 8, 9] },
//     { title: "Chapter 4", pages: [10, 11, 12] },
//     { title: "Chapter 5", pages: [13, 14, 15] },
//   ];

//   const handleChapterChange = (newChapterIndex) => {
//     setChapterIndex(newChapterIndex);
//     setPageIndex(0);
//   };

//   const handlePageChange = (newPageIndex) => {
//     setPageIndex(newPageIndex);
//   };

//   const handlePageClick = (data) => {
//     const newPageIndex = data.selected;
//     setPageIndex(newPageIndex);
//   };

//   return (
//     <div className="flex flex-col  ">
//       <div>
//         <h1 className="text-xl text-center">{content[chapterIndex].title}</h1>
//       </div>
//       <div className="flex flex-col">
//         <ReactPaginate
//           previousLabel="Prev Chapter"
//           nextLabel="Next Chapter"
//           pageCount={content.length}
//           marginPagesDisplayed={2}
//           pageRangeDisplayed={5}
//           onPageChange={(data) => handleChapterChange(data.selected)}
//           forcePage={chapterIndex}
//           className="flex justify-between bg-primary"
//         />
//         <ReactPaginate
//           previousLabel="Prev Page"
//           nextLabel="Next Page"
//           pageCount={content[chapterIndex].pages.length}
//           marginPagesDisplayed={2}
//           pageRangeDisplayed={5}
//           onPageChange={handlePageClick}
//           forcePage={pageIndex}
//           className="flex justify-between"
//         />
//       </div>
//       <Document renderMode="svg" file="/pdf/pdfbook.pdf" className="mx-auto">
//         <Page pageNumber={content[chapterIndex].pages[pageIndex]} />
//       </Document>
//     </div>
//   );
// };

// it is work perfectly

// import { useState } from 'react';
// import { pdfjs, Document, Page } from 'react-pdf';
// import ReactPaginate from 'react-paginate';

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// const MyPdfViewer = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [numPages, setNumPages] = useState(null);
//   const [chapters, setChapters] = useState([
//     { title: 'Chapter 1', startPage: 1, endPage: 10 },
//     { title: 'Chapter 2', startPage: 11, endPage: 20 },
//     { title: 'Chapter 3', startPage: 21, endPage: 30 },
//     { title: 'Chapter 4', startPage: 31, endPage: 40 },
//     { title: 'Chapter 5', startPage: 41, endPage: 50 },
//     { title: 'Chapter 6', startPage: 61, endPage: 70 },
//   ]);

//   const handlePageClick = (data) => {
//     const selectedPage = data.selected + 1;
//     setCurrentPage(selectedPage);
//   };

//   const handleChapterClick = (startPage) => {
//     setCurrentPage(startPage);
//   };

//   const handlePrevPageClick = () => {
//     setCurrentPage(currentPage - 1);
//   };

//   const handleNextPageClick = () => {
//     setCurrentPage(currentPage + 1);
//   };

//   const onDocumentLoadSuccess = ({ numPages }) => {
//     setNumPages(numPages);
//   };

//   return (
//     <div className="flex flex-col items-center p-4">
//       <div className="flex justify-between items-center mb-4">
//         <button
//           onClick={handlePrevPageClick}
//           disabled={currentPage <= 1}
//           className="px-4 py-2 m-2 bg-blue-500 text-background2 rounded"
//         >
//           Prev
//         </button>
//         <ReactPaginate
//           previousLabel=""
//           nextLabel=""
//           onPageChange={handlePageClick}
//           containerClassName="pagination"
//           activeClassName="active"
//           pageClassName="pagination-link"
//           previousClassName="pagination-link"
//           nextClassName="pagination-link"
//           className="flex gap-2 md:gap-9 from-neutral-500 list-none"
//         />
//         <button
//           onClick={handleNextPageClick}
//           disabled={currentPage >= numPages}
//           className="px-4 py-2 m-2 bg-blue-500 text-background2 rounded list-none"
//         >
//           Next
//         </button>
//       </div>
//       <div className="flex mb-4 flex-wrap justify-center md:justify-start">
//         {chapters.map((chapter) => (
//           <button
//             key={chapter.title}
//             className="px-4 py-2 m-2 bg-blue-500 text-background2 rounded"
//             onClick={() => handleChapterClick(chapter.startPage)}
//           >
//             {chapter.title}
//           </button>
//         ))}
//       </div>
//       <div className="w-full md:max-w-2xl">
//         <Document
//           file="/pdf/Ramayana.pdf"
//           onLoadSuccess={onDocumentLoadSuccess}
//         >
//           <Page pageNumber={currentPage} />
//         </Document>
//       </div>
//     </div>
//   );
// };

// export default MyPdfViewer;

// close here

//it is also working

// import React, { useState } from "react";
// import { Document, Page,pdfjs } from "react-pdf";
// // import SamplePDF from "../../../public/pdf/pdfbook.pdf";

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// const PdfBook = ({ pageNumber }) => {
//   const [numPages, setNumPages] = useState(null);

//   const onDocumentLoadSuccess = ({ numPages }) => {
//     setNumPages(numPages);
//   };

//   return (
//     <div className="pdf-book">
//       <Document
//         file="/pdf/Ramayana.pdf"
//         onLoadSuccess={onDocumentLoadSuccess}
//         className={"h-[700px] w-full"}
//         // options={{ workerSrc: "/pdf.worker.js" }}
//       >
//         <Page pageNumber={pageNumber} />
//       </Document>
//       <p>
//         Page {pageNumber} of {numPages}
//       </p>
//     </div>
//   );
// };

// const MyPdfViewer = () => {
//   const [chapter, setChapter] = useState("Chapter 1");
//   const [subChapter, setSubChapter] = useState("Sub-Chapter 1.1");

//   const handleChapterChange = (e) => {
//     setChapter(e.target.value);
//     // reset subChapter when changing chapter
//     setSubChapter("");
//   };

//   const handleSubChapterChange = (e) => {
//     setSubChapter(e.target.value);
//   };

//   const chapterList = [
//     {
//       name: "Chapter 1",
//       subChapters: [
//         {
//           name: "Sub-Chapter 1.1",
//           page: 1,
//         },
//         {
//           name: "Sub-Chapter 1.2",
//           page: 5,
//         },
//         {
//           name: "Sub-Chapter 1.3",
//           page: 10,
//         },
//       ],
//     },
//     {
//       name: "Chapter 2",
//       subChapters: [
//         {
//           name: "Sub-Chapter 2.1",
//           page: 15,
//         },
//         {
//           name: "Sub-Chapter 2.2",
//           page: 20,
//         },
//       ],
//     },
//     {
//       name: "Chapter 3",
//       subChapters: [
//         {
//           name: "Sub-Chapter 3.1",
//           page: 25,
//         },
//       ],
//     },
//   ];

//   // Find the subchapter object based on the name
//   const selectedSubChapter = chapterList
//     .find((c) => c.name === chapter)
//     .subChapters.find((sc) => sc.name === subChapter);

//   return (
//     <div>
//       <div>
//         <label htmlFor="chapter-select">Chapter:</label>
//         <select
//           id="chapter-select"
//           value={chapter}
//           onChange={handleChapterChange}
//         >
//           {chapterList.map((c) => (
//             <option key={c.name} value={c.name}>
//               {c.name}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div>
//         <label htmlFor="subchapter-select">Sub-Chapter:</label>
//         <select
//           id="subchapter-select"
//           value={subChapter}
//           onChange={handleSubChapterChange}
//           disabled={!chapter}
//         >
//           <option value="">Select a Sub-Chapter</option>
//           {chapterList
//             .find((c) => c.name === chapter)
//             .subChapters.map((sc) => (
//               <option key={sc.name} value={sc.name}>
//                 {sc.name}
//               </option>
//             ))}
//         </select>
//       </div>
//       {selectedSubChapter && <PdfBook pageNumber={selectedSubChapter.page} />}
//     </div>
//   );
// };

// export default MyPdfViewer;



















// this is letest 

// import React, { useState } from "react";
// import { Document, Page, pdfjs } from "react-pdf";

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// const PdfBook = ({ pageNumber }) => {
//   const [numPages, setNumPages] = useState(null);

//   const onDocumentLoadSuccess = ({ numPages }) => {
//     setNumPages(numPages);
//   };

//   return (
//     <div className="pdf-book">
//       <Document
//         file="/pdf/Ramayana.pdf"
//         onLoadSuccess={onDocumentLoadSuccess}
//         className="h-[500px] w-60 md:h-[900px] md:w-full"
//       >
//         <Page pageNumber={pageNumber} />
//       </Document>
//       <p>
//         Page {pageNumber} of {numPages}
//       </p>
//     </div>
//   );
// };

// const MyPdfViewer = () => {
//   const [chapter, setChapter] = useState("Chapter 1");
//   const [subChapter, setSubChapter] = useState("Sub-Chapter 1.1");

//   const handleChapterChange = (e) => {
//     setChapter(e.target.value);
//     // reset subChapter when changing chapter
//     setSubChapter("");
//   };

//   const handleSubChapterChange = (e) => {
//     setSubChapter(e.target.value);
//   };

//   const chapterList = [
//     {
//       name: "Chapter 1",
//       subChapters: [
//         {
//           name: "Sub-Chapter 1.1",
//           page: 1,
//         },
//         {
//           name: "Sub-Chapter 1.2",
//           page: 5,
//         },
//         {
//           name: "Sub-Chapter 1.3",
//           page: 10,
//         },
//       ],
//     },
//     {
//       name: "Chapter 2",
//       subChapters: [
//         {
//           name: "Sub-Chapter 2.1",
//           page: 15,
//         },
//         {
//           name: "Sub-Chapter 2.2",
//           page: 20,
//         },
//       ],
//     },
//     {
//       name: "Chapter 3",
//       subChapters: [
//         {
//           name: "Sub-Chapter 3.1",
//           page: 25,
//         },
//       ],
//     },
//   ];

//   // Find the subchapter object based on the name
//   const selectedSubChapter = chapterList
//     .find((c) => c.name === chapter)
//     .subChapters.find((sc) => sc.name === subChapter);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen">
//       <div className="w-full max-w-md mx-auto mb-8">
//         <div className="mb-4">
//           <label htmlFor="chapter-select">Chapter:</label>
//           <select
//             id="chapter-select"
//             value={chapter}
//             onChange={handleChapterChange}
//             className="block  mt-1 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//           >
//             {chapterList.map((c) => (
//               <option key={c.name} value={c.name}>
//                 {c.name}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="mb-4">
//           <label htmlFor="subchapter-select">Sub-Chapter:</label>
//           <select
//             id="subchapter-select"
//             value={subChapter}
//             onChange={handleSubChapterChange}
//             className="block  mt-1 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//           >
//             <option value="">Select Sub-Chapter</option>
//             {chapterList
//               .find((c) => c.name === chapter)
//               .subChapters.map((sc) => (
//                 <option key={sc.name} value={sc.name}>
//                   {sc.name}
//                 </option>
//               ))}
//           </select>
//         </div>
//         <div>
//           <p className="mb-2">Selected Chapter: {chapter}</p>
//           <p className="mb-2">Selected Sub-Chapter: {subChapter}</p>
//           {selectedSubChapter && (
//             <PdfBook pageNumber={selectedSubChapter.page} />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyPdfViewer;










