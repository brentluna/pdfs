import React from 'react';
import PDFViewer from 'react-pdf-js';
import spdf from 'simple-react-pdf';


const PdfIndex = ({pdfs}) => {

  const mapPdfs = () => {
    let lis = [];
    if (pdfs && Object.keys(pdfs).length) {
      for (let pdf in pdfs) {
        let currPdf = pdfs[pdf];
        lis.push(
          <li key={pdf} className='pdf-li'>
            <a href={currPdf.url} target='_blank'>
            <PDFViewer file={currPdf.url} />
          </a>
          </li>
        )

      }
    }
    return lis;
  }

  return (
    <div className='pdfs-container'>
      <ul className='pdfs-ul'>
        {mapPdfs()}
      </ul>
    </div>
  )
}

export default PdfIndex;
