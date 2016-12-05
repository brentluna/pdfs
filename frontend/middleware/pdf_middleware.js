import {PdfConstants} from '../actions/pdf_actions';
import {fetchAllPdfs, getPresignedUrl, createPdf, uploadToS3, allUrlsReceived} from '../util/pdf_api';

const PdfMiddleware = store => next => action => {
  
  switch(action.type){
    case PdfConstants.FETCH_PDFS:
      const fetchSuccess = pdfs => store.dispatch(allUrlsReceived(pdfs));
      fetchAllPdfs(fetchSuccess);
      return next(action);
    case PdfConstants.CREATE_PDF:
      const createSuccess = () => store.dispatch(fetchAllPdfs());
      createPdf(createSuccess);
      return next(action);
    default:
      return next(action);

  }
}

export default PdfMiddleware;
