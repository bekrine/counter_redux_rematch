export default  {
  state: {
    count:0,
    isIncrementing:false,
    isDecrementing:false,
  }, // initial state
  reducers: {
    // handle state changes with pure functions
    incremented(state,payload) {
      state.count += 1
      state.isIncrementing = false
      return {...state}
    },
    decremented(state,args){
      state.isIncrementing = false
        state.count -= 1
      return {...state}
    },
    startedIncrementing(state,args){
        state.isIncrementing = true
      return {...state}
    },

  },
  effects:(dispatch)=>({
     decrement(args,state){  
            // save to cache 
            // save to db 
            dispatch.counter.startedIncrementing()
            setTimeout(() => {
                dispatch.counter.decremented()       
                dispatch.toaster.toast({message:"decremented"})       
            }, 2000);
     },
     async incrementAsync(args,state){ 
       dispatch.counter.startedIncrementing()       

        await setTimeout(() => {
                dispatch.counter.incremented()  
                 dispatch.toaster.toast({message:"incremented"})     
        }, 2000);
     },
  })
};
