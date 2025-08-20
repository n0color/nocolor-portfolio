import React from 'react';
import cvPdf from "./assets/CV.pdf";
import NavMenu from "./components/navMenu";
const PdfViewer = () => {

  return (
    <>
      <NavMenu />
      <object data={cvPdf} type="application/pdf" width="100%" height="1080px">
        <title>Alternative text - include a link <a href={cvPdf}>to the CV!</a></title>
      </object>
    </>
  );
};

export default PdfViewer;