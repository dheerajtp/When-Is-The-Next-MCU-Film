import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const getWhatIsNext = createAsyncThunk('mcu/next', async()=>{
    const response = await fetch(`https://www.whenisthenextmcufilm.com/api`);
    const formattedresponse = await response.json();
    return formattedresponse;
});

export const getNext = createAsyncThunk('mcu/movieorseries/upnext',async(date) =>{
    const response = await fetch(`https://www.whenisthenextmcufilm.com/api?date=${date}`);
    const formattedresponse = await response.json();
    return formattedresponse;
})

export const mcuSlice = createSlice({
    name:"mcu",
    initialState:{value:{days_until:0,overview:"",poster_url:"",release_date:"",title:"",type:"",isLoading:false,isError:false,nextoverview:"",nextposter:"",nexttitle:"",nextdate:"",following_production:{}}},
    extraReducers:{
        [getWhatIsNext.pending] :(state)=>{
            state.value.isLoading=true;
        },
        [getWhatIsNext.fulfilled] : (state,action)=>{
            state.value.isLoading = false;
            state.value.days_until = action.payload.days_until;
            state.value.overview =action.payload.overview;
            state.value.poster_url =action.payload.poster_url;
            state.value.release_date =action.payload.release_date;
            state.value.title =action.payload.title;
            state.value.type = action.payload.type;
            state.value.nextoverview =action.payload.following_production.overview;
            state.value.nextposter =action.payload.following_production.poster_url;
            state.value.nexttitle =action.payload.following_production.title;
            state.value.nextdate = action.payload.following_production.release_date;
            state.value.following_production = action.payload.following_production;
        },
        [getWhatIsNext.rejected] :(state,action)=>{
            state.value.isLoading = false;
            state.value.isError = false;
        },
        [getNext.pending]:(state)=>{
            state.value.isLoading=true;
        },
        [getNext.fulfilled] :(state,action)=>{
            state.value.isLoading = false;
            state.value.days_until = action.payload.days_until;
            state.value.overview =action.payload.overview;
            state.value.poster_url =action.payload.poster_url;
            state.value.release_date =action.payload.release_date;
            state.value.title =action.payload.title;
            state.value.type = action.payload.type;
            state.value.nextoverview =action.payload.following_production.overview;
            state.value.nextposter =action.payload.following_production.poster_url;
            state.value.nexttitle =action.payload.following_production.title;
            state.value.nextdate = action.payload.following_production.release_date;
            state.value.following_production = action.payload.following_production;
        },
        [getNext.rejected]:(state,action)=>{
            state.value.isLoading = false;
            state.value.result = action.payload;
        }
    }
});

export default mcuSlice.reducer;