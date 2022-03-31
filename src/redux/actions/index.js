// Action Creator is a function that dispatches action
export const actionOne = (param1) => {
  return (dispatch) => {
    dispatch({
      type: 'changeOnceCreated',
      payload: param1,
    })
  }
}

// Action Creator is a function that dispatches action
export const actionTwo = (param2) => {
  return (dispatch) => {
    dispatch({
      type: 'changeOnceCreated',
      payload: param2,
    })
  }
}