import axios from "axios";

class MoviesClient {
    private readonly baseUrl = "https://api.themoviedb.org/3";

    public constructor(private apiKey: string) {
    }

    public async getPopularMovies(page: number) {
        return await this.get("/movie/popular", {
            page: page.toString(),
            appendToResponse: "images,genres",
        })
    }

    public async searchByText(query: string, page: number) {
        return await this.get("/search/movie", {
            query: query,
            page: page.toString()
        })
    }

    public async get(path: string, queryParams: URLSearchParams | Record<string, string>) {

        try {
            const result = await axios.get(this.baseUrl + path, {
                params: {
                    ...queryParams,
                    api_key: this.apiKey
                }
            })

            return result.data;
        } catch (e) {
            console.log(e)
            throw e
        }
    }
}

export default new MoviesClient(import.meta.env.VITE_TMDB_API_KEY)