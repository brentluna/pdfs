import {PdfConstants, receivePresignedUrl, receiveUrl} from '../actions/pdf_actions';
import {fetchAllPdfs, getPresignedUrl, createPdf, uploadToS3, allUrlsReceived} from '../util/pdf_api';

const PdfMiddleware = store => next => action => {
  console.log(action)
  switch(action.type){
    case PdfConstants.FETCH_PDFS:
      const fetchSuccess = pdfs => store.dispatch(allUrlsReceived(pdfs));
      fetchAllPdfs(fetchSuccess);
      return next(action);
    case PdfConstants.CREATE_PDF:
      const createSuccess = () => store.dispatch(fetchAllPdfs());
      createPdf(createSuccess);
      return next(action);
    case PdfConstants.FETCH_PRESIGNED_URL:
      const file = action.data;
      const presignedSuccess = (url) => store.dispatch(receivePresignedUrl(file, url));
      getPresignedUrl(action.data, presignedSuccess) 
      return next(action);
     
    case PdfConstants.RECEIVE_PRESIGNED_URL:
      const receivedPresignedSuccess = url => store.dispatch(receiveUrl(url));
      uploadToS3(action.file, action.url, receivedPresignedSuccess);

    default:
      return next(action);

  }
}

export default PdfMiddleware;
