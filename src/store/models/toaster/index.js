export default  {
  state: {
    message:"",
  }, // initial state
  reducers: {
    // handle state changes with pure functions
    toasted(state,message) {
      state.message = message
      return {...state}
    },
    clearedToast(state,args) {
      state.message = ""
      return {...state}
    },

  },
  effects:(dispatch)=>({
     toast({message},state){  
            //alert(message)
            dispatch.toaster.toasted(message) 
            setTimeout(() => {
              dispatch.toaster.clearedToast() 
            }, 2000);      
     },
  })
};
