export const PdfConstants = {
  URL_RECEIVED: 'URL_RECEIVED',
  FETCH_PDF: 'FETCH_PDF',
  FETCH_PDFS:'FETCH_PDFS',
  GET_PRESIGNED_URL: 'GET_PRESIGNED_URL',
  UPLOAD_TO_S3: 'UPLOAD_TO_S3',
  ALL_URLS_RECEIVED: 'ALL_URLS_RECEIVED',
  CREATE_PDF: 'CREATE_PDF'
}

export const createPdf = pdf => ({
  type: PdfConstants.CREATE_PDF,
  pdf
});

export const urlReceived = url => ({
  type: PdfConstants.URL_RECEIVED,
  url
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

export const fetchPresignedURL = (prefix, filename, file) => ({
  type: PdfConstants.GET_PRESIGNED_URL,
  prefix: prefix, 
  filename: filename,
  file: file
});

export const uploadToS3 = (presignedUrl, file) => ({
  type: PdfConstants.UPLOAD_TO_S3,
  presignedURL: presignedUrl,
  file: file
});


