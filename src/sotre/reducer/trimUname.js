// Quack! This is a duck. https://github.com/erikras/ducks-modular-redux

const initialState = {
	uname:null
}

const trimuname = (state, action)=>{
    let uname = action.uname.trim(); 
    console.log('uname value at reducer', uname)
    let newState = {uanme:uname}
    return {...state, ...newState}
} 
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TRIM_USERNAME_SPACES':
    //   return {
    //     data: action.data,
    //   };
    return trimuname(state, action)
    default:
      return state;
  }
};

export default reducer;