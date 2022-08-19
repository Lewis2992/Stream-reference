import {combineReducers} from 'redux';

import oauthReducer from './oauthReducer'
import createStreamFormReducer from './createStreamFormReducer';

export default combineReducers({auth: oauthReducer, create: createStreamFormReducer});