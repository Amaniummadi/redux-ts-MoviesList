


export const GET_POSTS = 'GET_POSTS'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE'

// types
export type IsearchList={
    Search:ISearchMovies[]
}

export type ISearchMovies= {
    Title:string,
    Year:number,
    imdbID:string,
    Type:string,
    Poster:string
}

// actions
export interface getPosts {
    type: typeof GET_POSTS
}
export interface getSuccess {
    type: typeof GET_POSTS_SUCCESS,
    payload:IsearchList
}
export interface getfailure {
    type: typeof GET_POSTS_FAILURE
}

export type AllMoviesActions=getPosts | getSuccess | getfailure

