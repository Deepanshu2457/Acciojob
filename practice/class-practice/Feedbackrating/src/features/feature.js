import { createSlice } from "@reduxjs/toolkit";

const saveData={
    ratings:[],
    average:0,
    count:{
        1:0,
        2:0,
        3:0,
        4:0,
        5:0
    }
}
const calculateAverage=(ratings)=>{
    if(ratings.length===0)return 0 ;
    const total=ratings.reduce((sum ,item)=> sum + item.ratings ,0 )
    const average=(total/ratings.length).toFixed(1);
    return average
}

const feedbackSlice=createSlice({
    name:"feedback",
    initialState:saveData,
    reducers:{
        addFeedback:(state,action)=>{
            const {ratings, comment}=action.payload
            state.ratings.push({ ratings,comment});
            state.count[ratings]+=1;
            state.average=calculateAverage(state.ratings);


        }
    }

})
export const {addFeedback}=feedbackSlice.actions;

export default feedbackSlice.reducer