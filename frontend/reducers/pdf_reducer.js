import {PdfConstants} from '../actions/pdf_actions';

const PdfReducer = (state = {}, action) => {
  switch(action.type){
    case PdfConstants.ALL_URLS_RECEIVED:
      let allURLS = Object.assign({}, action.urls);
      return allURLs;
    default:
      return state;
  }
}

export default PdfReducer;
