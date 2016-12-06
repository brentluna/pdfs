import {PdfConstants, receivePresignedUrl, receiveUrl, fetchPdf, receivePdfs, receivePdf, pdfDeleted} from '../actions/pdf_actions';
import {fetchAllPdfs, getPresignedUrl, createPdf, uploadToS3, allUrlsReceived, deletePdf} from '../util/pdf_api';

const PdfMiddleware = store => next => action => {
  switch(action.type){
    case PdfConstants.FETCH_PDFS:
      const fetchSuccess = pdfs => store.dispatch(receivePdfs(pdfs));
      fetchAllPdfs(fetchSuccess);
      return next(action);

    case PdfConstants.CREATE_PDF:
      const createSuccess = pdf => store.dispatch(receivePdf(pdf));
      createPdf(createSuccess);
      return next(action);

    case PdfConstants.FETCH_PRESIGNED_URL:
      const file = action.data;
      const presignedSuccess = (url) => store.dispatch(receivePresignedUrl(file, url));
      getPresignedUrl(action.data, presignedSuccess) 
      return next(action);
     
    case PdfConstants.RECEIVE_PRESIGNED_URL:
      const receivedPresignedSuccess = url => store.dispatch(receiveUrl(url, action.file.name));
      uploadToS3(action.file, action.url, receivedPresignedSuccess);
      return next(action);

    case PdfConstants.RECEIVE_URL:
      const receiveUrlSuccess = pdf => store.dispatch(receivePdf(pdf))
      createPdf(action.url, action.name, receiveUrlSuccess);
      return next(action);

    case PdfConstants.DELETE_PDF:
      const deleteSuccess = pdf => store.dispatch(pdfDeleted(pdf));
      deletePdf(action.pdf, deleteSuccess)
      return next(action);

    default:
      return next(action);

  }
}

export default PdfMiddleware;
