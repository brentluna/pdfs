export const PdfConstants = {
  URL_RECEIVED: 'URL_RECEIVED',
  FETCH_PDF: 'FETCH_PDF',
  FETCH_PDFS:'FETCH_PDFS',
  FETCH_PRESIGNED_URL: 'FETCH_PRESIGNED_URL',
  UPLOAD_TO_S3: 'UPLOAD_TO_S3',
  ALL_URLS_RECEIVED: 'ALL_URLS_RECEIVED',
  CREATE_PDF: 'CREATE_PDF',
  RECEIVE_PRESIGNED_URL: 'RECEIVE_PRESIGNED_URL',
  RECEIVE_URL: 'RECEIVE_URL',
  GET_PRESIGNED_URL:'GET_PRESIGNED_URL',
  RECEIVE_PDF: 'RECEIVE_PDF',
  RECEIVE_PDFS: 'RECEIVE_PDFS'
 
}

export const receivePdf = pdf => ({
  type: PdfConstants.RECEIVE_PDF,
  pdf
});

export const receivePdfs = pdfs => ({
  type: PdfConstants.RECEIVE_PDFS,
  pdfs
});


export const createPdf = (pdf, name) => ({
  type: PdfConstants.CREATE_PDF,
  pdf,
  name
});

export const receiveUrl = (url, name) => ({
  type: PdfConstants.RECEIVE_URL,
  url,
  name
});

export const allUrlsReceived = urls => ({
  type: PdfConstants.ALL_URLS_RECEIVED,
  urls
});

export const fetchPdf = pdf => ({
  type: PdfConstants.FETCH_PDF,
  pdf
});


export const fetchPdfs = () => ({
  type: PdfConstants.FETCH_PDFS
});

export const fetchPresignedUrl = (data) => ({
  type: PdfConstants.FETCH_PRESIGNED_URL,
  data
 });

export const uploadToS3 = (presignedUrl, file) => ({
  type: PdfConstants.UPLOAD_TO_S3,
  presignedURL: presignedUrl,
  file: file
});

export const receivePresignedUrl = (file, url) => ({
  type: PdfConstants.RECEIVE_PRESIGNED_URL,
  url,
  file
});

