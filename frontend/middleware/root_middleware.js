import {applyMiddleware} from 'redux';
import PdfMiddleware from './pdf_middleware'
import SessionMiddleware from './session_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  PdfMiddleware
)

export default RootMiddleware
