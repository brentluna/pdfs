export const PdfConstants = {
  URL_RECEIVED: 'URL_RECEIVED',
  FETCH_PDF: 'FETCH_PDF',
  FETCH_PDFS:'FETCH_PDFS'
}


export const urlReceived = url => ({
  type: PdfConstants.URL_RECEIVED,
  url
});

export const fetchPdf = pdf => ({
  type: PdfConstants.FETCH_PDF,
  pdf
});


export const fetchPdfs = () => ({
  type: PdfConstants.FETCH_PDFS
});


