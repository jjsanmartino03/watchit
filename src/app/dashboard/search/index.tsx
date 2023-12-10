import {useAppDispatch, useAppSelector} from "../../../redux/hooks.ts";
import {useEffect} from "react";
import {fetchMovies, getMovies} from "../../../redux/slices/movies.ts";

export default function Search() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchMovies(1))
    }, [])

    const movies = useAppSelector(getMovies);


    return <div><h1>Search</h1>
        {
            movies && movies.results.map((movie) => <div key={movie.id}>{movie.title}</div>)
        }
    </div>
}