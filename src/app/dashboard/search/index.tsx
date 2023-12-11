import {useAppDispatch, useAppSelector} from "@redux/hooks.ts";
import {useEffect, useState} from "react";
import {fetchMovies, getMovies} from "@redux/slices/movies.ts";
import styles from './styles.module.pcss'
import Input from "@ui/input";
import Button from "@ui/button";
import Loader from "@ui/loader";
import {RootState} from "@redux/store.ts";
import {post} from 'aws-amplify/api'

export default function Search() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchMovies(1))
    }, [])

    const movies = useAppSelector(getMovies);
    const user = useAppSelector((state: RootState) => state.auth.user);
    const status = useAppSelector(state => state.movies.status);
    const [search, setSearch] = useState('');

    const handleSearch = () => {
        dispatch(fetchMovies(1, search));
    }

    const getCroppedOverview = (overview: string) => {
        if (overview.length > 200) {
            return overview.slice(0, 200).trim() + '...'
        }
        return overview;
    }

    const handleAddMovie = async (movie: { id: number }) => {
        if (!user) return;
        const restOperation = post({
            apiName: 'watchitmovies',
            path: '/movies/',
            options: {
                body: {
                    id: user.username,
                    movieId: movie.id
                }
            }
        })

        const response = await restOperation.response;
        console.log(response);
    }

    return <div className={styles.searchContainer}>

        <h1>Search</h1>
        <div className={styles.filters}>
            <Input onKeyUp={(e) => e.key === 'Enter' && handleSearch()}
                   placeholder={'Movie title...'} error value={search} onChange={(value) => setSearch(value)}/>
            <Button theme={'secondary'} onClick={handleSearch}>Search</Button>
        </div>
        {status === 'loading' && <Loader/>}
        <div className={styles.moviesContainer}>

            {
                movies && movies.results.map((movie) =>
                    <div className={styles.movie} key={movie.id}>
                        <div><img
                            className={styles.movie__poster}
                            alt={`${movie.title}'s poster`}
                            src={'https://image.tmdb.org/t/p/w300/' + movie.poster_path}/>
                            <h4>{movie.title}</h4><p>{getCroppedOverview(movie.overview)}</p></div>
                        <Button theme={'secondary'} onClick={() => handleAddMovie({id: movie.id})}
                                variant={'outlined'}>Agregar</Button>
                    </div>
                )
            }
        </div>

    </div>
}