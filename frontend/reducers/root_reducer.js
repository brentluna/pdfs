import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import PdfReducer from './pdf_reducer';


const RootReducer = combineReducers({
  session: SessionReducer,
  pdfs: PdfReducer
});


 
export default RootReducer;
