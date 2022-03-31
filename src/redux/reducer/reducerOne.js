/*
  - Redux Reducer:
    - function: create react redux reducer for .....
    - params:
      - state: initial state
      - action: read action and return correct state
    - common to use as a switch statement, on action.type
*/
// const initialDataState = {} as Data;
const reducer = (
  // state: initialDataState,
  state = 0, // will be changed, to what is in the data
  action,
) => {
  switch (action.type) {
    case "action1": 
      return state + action.payload;
    case "action2":
      return state - action.payload;
    default:
      return state;
  }
}

export default reducer;
