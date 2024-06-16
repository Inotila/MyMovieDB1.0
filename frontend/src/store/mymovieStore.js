import create from 'zustand';

const useMovieStore = create(set => ({
    movies: [],
    setMovies: (movies) => set({ movies }),
    addMovie: (movie) => set(state => ({ movies: [...state.movies, movie] })),
    removeMovie: (imdbid) => set(state => ({ movies: state.movies.filter(movie => movie.imdbid !== imdbid) })),
    toggleFavorite: (imdbid) => set(state => ({
        movies: state.movies.map(movie => movie.imdbid === imdbid ? { ...movie, favorite: !movie.favorite } : movie)
    }))
}));

export default useMovieStore;
