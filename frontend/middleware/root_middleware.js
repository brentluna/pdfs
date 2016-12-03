import {applyMiddleware} from 'redux';

import SessionMiddleware from './session_middleware';

cosnt RootMiddleware = applyMiddleware(
  SessionMiddleware
)
