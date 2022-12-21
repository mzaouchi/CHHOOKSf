import CardMovie from "./CardMovie"

const ListMovies=({movies,setMovies})=>{
    return(
        <div className="bou">
            {
                movies.map(el=> <CardMovie el={el} movies={movies} setMovies={setMovies}/>)
            }
        </div>
    )
}

export default ListMovies