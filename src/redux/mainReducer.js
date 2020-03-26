import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth22948Reducer from '../features/EmailAuth22948/redux/reducers';
import Dashboard122943Reducer from '../features/Dashboard122943/redux/reducers'
import Dashboard122939Reducer from '../features/Dashboard122939/redux/reducers'
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth22948: EmailAuth22948Reducer,
Dashboard122943: Dashboard122943Reducer,
Dashboard122939: Dashboard122939Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});