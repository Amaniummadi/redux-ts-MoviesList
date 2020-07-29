import {Dispatch} from 'redux'
import {GET_POSTS,GET_POSTS_FAILURE,GET_POSTS_SUCCESS,AllMoviesActions} from './MLTypes'
import axios from 'axios'



export  const GetMoviesList = (searchvalue : string)=> async (dispatch:Dispatch<AllMoviesActions>) =>{
//fetch api data
    try{
        dispatch({
            type:GET_POSTS
        })
        const res= await axios.get(`https://www.omdbapi.com/?s=${searchvalue}&apikey=4a3b711b`)
        dispatch({
            type:GET_POSTS_SUCCESS,
            payload:res.data
        })
    }
    catch(e){
        dispatch({
            type:GET_POSTS_FAILURE
        })
    }

}