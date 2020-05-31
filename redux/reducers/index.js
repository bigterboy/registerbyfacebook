import {combineReducers} from 'redux';
import counterReducer from './counterReducer';
import loginReducer from './loginReducer';
// import storage from "redux-persist/lib/storage";
import AsyncStorage from '@react-native-community/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { persistStore, persistReducer } from "redux-persist";

const persistConfigApp = {
  key: "app",
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2
};

export default combineReducers({
  counterReducer: persistReducer(persistConfigApp, counterReducer),
  loginReducer: loginReducer,
});
