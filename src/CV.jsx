import React from 'react';
const url = "../CV.pdf";
import NavMenu from "./components/navMenu";
const PdfViewer = () => {

  return (
    <>
      <NavMenu />
      <object data={url} type="application/pdf" width="100%" height="1080px">
        <title>Alternative text - include a link <a href={url}>to the CV!</a></title>
      </object>
    </>
  );
};

export default PdfViewer;