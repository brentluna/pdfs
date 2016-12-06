import {PdfConstants} from '../actions/pdf_actions';

const PdfReducer = (state = {}, action) => {
  switch(action.type){
    case PdfConstants.RECEIVE_PDFS:
      let allURLS = {};
      action.pdfs.forEach(el => {
        allURLS[el.id] = el;
      });
      return allURLS;
    case PdfConstants.RECEIVE_PDF:
      let updatedUrls = Object.assign({}, state);
      let newPdf = action.pdf;
      updatedUrls[newPdf.id] = newPdf;
      return updatedUrls;
    case PdfConstants.PDF_DELETED:
      const pdfId = action.pdf.id;
      let deletedObj = Object.assign({}, state);
      delete deletedObj[pdfId];
      return deletedObj;
    default:
      return state;
  }
}


export default PdfReducer;
