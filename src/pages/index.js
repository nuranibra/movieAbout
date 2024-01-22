import Card from "@/components/card/card";
import Cards from "@/components/cards/cards.jsx";
import { useEffect, useState } from "react";
import style from '@/styles/index.module.css'
export default function Home () {

  const [text, setText] = useState('')
  const [movieArr, setMovieArr] = useState([])
  const [movies, setMovies] = useState([])

  const handleClikc = (str) => {
      movies.push(<Card item={str}/>)
  }

  return (
    <>
    <section className={style.box}>
      <div>
        <h1 className={style.title}>OMDB Rest Api</h1>
      </div>
      <div className={style.inpBtn}>
        <input type="text" value={text} placeholder="Enter Movie" onInput={(e) => {
          setText(e.target.value)
        }}/>
        <button onClick={() => {
          movieArr.push(text)
          handleClikc(text)
          setText('')
        }}>Add</button>
      </div>
      <div>
        <Cards movies={movies} />
      </div>
    </section>
    </>
  );
}