import React from 'react';
const url = "../CV.pdf";

const PdfViewer = () => {


  return (
    <object data={url} type="application/pdf" width="100%" height="1080px">
      <title>Alternative text - include a link <a href={url}>to the PDF!</a></title>
    </object>
  );
};

export default PdfViewer;