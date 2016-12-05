import React from 'react';

const PdfIndex = ({pdfs}) => {

  const mapPdfs = () => {
    let lis = [];
    if (pdfs && Object.keys(pdfs).length) {
      for (let pdf in pdfs) {
        let currPdf = pdfs[pdf];
        lis.push(
          <li key={pdf}>
            <embed src={currPdf.url} type='application/pdf' />
          </li>
        )

      }
    }
    return lis;
  }

  return (
    <div>
      <ul>
        {mapPdfs()}
      </ul>
    </div>
  )
}

export default PdfIndex;
