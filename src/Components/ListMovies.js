import CardMovie from "./CardMovie"

const ListMovies=({movies,setMovies,titre,etoile})=>{
    const x =  movies.filter(el=> el.title.toUpperCase().includes(titre.toUpperCase()) && el.rating>=etoile).map(el=> <CardMovie el={el} movies={movies} setMovies={setMovies}/>)
    return(
        <div className="bou">
            {              
                 x.length == 0 ? <img src="/hh.jpg" style={{height:'500px'}}/> : x          
             
            }
        </div>
    )
}

export default ListMovies