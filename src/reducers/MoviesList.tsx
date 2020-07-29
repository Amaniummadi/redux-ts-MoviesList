import {IsearchList , AllMoviesActions, GET_POSTS_SUCCESS,GET_POSTS_FAILURE,GET_POSTS} from '../actions/MLTypes'

type ImoviesList = {
    loading:boolean;
    movies ? :IsearchList
}

export const moviesList : ImoviesList = {
    loading:false
}


export const MovieslistReducer = (state : ImoviesList = moviesList ,action:AllMoviesActions) : ImoviesList => {
    
            switch(action.type){
                case GET_POSTS:
                    return{
                        ...state,
                        loading:true
                    }
                case GET_POSTS_FAILURE:
                    return{
                        loading:false
                    }
                case GET_POSTS_SUCCESS:
                    return{
                        loading:false,
                        movies:action.payload
                    }
                    default:
                        return state
            }


}

