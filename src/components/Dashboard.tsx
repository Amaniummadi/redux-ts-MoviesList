import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {GetMoviesList} from '../actions/MLactions'
import {rootStore} from '../index'

const Dashboard = () => {
    const [inputvalue, setIinputvalue] = useState('')
    const dispatch = useDispatch()
    const AllmoviesList = useSelector((state:rootStore) => state.movies)
    // useEffect(() => {
    //     dispatch(GetMoviesList())
    // }, [dispatch])

    console.log("AllmoviesList",AllmoviesList);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setIinputvalue(event.target.value)
    }

    const handleSubmit = ( event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault()
       console.log("input valuues",inputvalue);
       dispatch(GetMoviesList(inputvalue))
    }


    return (
        <div>
            <h1>dashboard</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={inputvalue}/>
                <button >SEARCH</button>
            </form>

            {
                AllmoviesList.movies && AllmoviesList.movies.Search.map(movie => (
                <div key={movie.imdbID}>
                <p >{movie.Title}</p>
                <img src={movie.Poster}  alt="img"/>
                <p>{movie.Year}</p>
                </div>
               ))
            }
        </div>
    )
}

export default Dashboard
