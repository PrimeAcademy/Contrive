// Used to store categories that have artworks available from the Server to the dropdown
const awsReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_PROFILE_PIC':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default awsReducer;
  