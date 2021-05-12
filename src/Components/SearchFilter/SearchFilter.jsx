import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMovieInfo, removeMovie, selectMovie } from '../../features/MoviesSlice'
import './Search.css'
function SearchFilter() {
    const dispatch = useDispatch()
    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState('')
    const moviesLiked = useSelector(selectMovie)
    useEffect(async () => {
        try {
            const { data } = await axios.get("https://movie-recom-ml.herokuapp.com/getMoviesList")
            setMovies(data.movies)
            console.log(movies[0],"movies");
        } catch (e) {
            console.log(e);
        }
    }, [])

    const addMovies = async (id,title) => {
        console.log(id,title);
        await dispatch(addMovieInfo({
            movie:{id:id,title:title}
        }))
        await setSearch('')
        console.log(search);
    }
    
    return (
        <div className="container p-2">
            {movies.length ===   0 ? <h2 className="has-text-info">Please wait Data is beign fetched</h2>:null}
            <input onChange={(e) => setSearch(e.target.value)} className="input is-rounded" type="text" placeholder="Search" disabled={movies.length === 0 ? true : false} />
            <div>
                <ul className="searchFilter__list">
                    {
                        movies.length !== 0 && search.length != 0 ?
                        (
                            movies.map((movie) => {
                                if(movie.title.toLowerCase().startsWith(search.toLowerCase())){
                                    return <li key={movie.id}> <h3>{movie.title}</h3> <a className="button is-link" onClick={() => addMovies(movie.id,movie.title)}>Add</a> </li>
                                }
                            })
                        ):null
                    }
                </ul>
            </div>
            <div className="searchFilter__tags">
                {
                    moviesLiked ? 
                    moviesLiked.map(movie => {
                        return <span key={movie.id}>{movie.title} <button onClick={() => dispatch(removeMovie({
                            movie:{id:movie.id}
                        }))} className="delete"></button></span>
                    }):
                    null
                }
            </div>
        </div>
    )
}

export default SearchFilter
