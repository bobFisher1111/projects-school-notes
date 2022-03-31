import { createStore, applyMiddleware } from 'redux';
import reducers from './reducer/index';
import thunk from 'redux-thunk';

/*
    - This will take as a parameters:
        - the reducer that we created
        - default state, here we are using {}
        - applyMiddleware(thunk) // used as middleware to support asynchronouse action without a lot of boilerplate code
*/
export const store = createStore(
  reducers,
  {},
  applyMiddleware(thunk),
);

// next hook up store to react application