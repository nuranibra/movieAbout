import { useEffect, useState } from "react";
import style from './card.module.css'

export default function Card ({item}) {
    const [movie, setMovie] = useState({})
    const [open, setOpen] = useState(false)

    if(item !== ''){
        useEffect(() => {
            fetch(`http://www.omdbapi.com/?apikey=f1f1f3b1&t=${item}`)
            .then(res => res.json())
            .then(result => {
                setMovie(result)
            })
        }, [item])
    }

    return (
        <>
            <div className={style.box} style={{position:"relative",display:'flex', boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', borderRadius:'20px'}} onMouseOver={() => {
                setOpen(true)
             }} onMouseOut={() => {
                setOpen(false)
             }}>
                <div>
                    <img src={movie.Poster} style={{width:'200px', height:'100%', borderRadius:'20px'}}/>
                </div>
                <div className={style.openBox} style={open ? {height:"80%", position:"absolute", bottom:"0", left:'0',borderRadius:'20px', width:"100%" , transition:"calc(0.2s)"} : {height:"0"}}>
                    <div style={open ? {display:'block', padding:"10px"} : {display:'none'}}>
                        <h2 className={style.title}>{movie.Title}</h2>
                        <p className={style.parag}><strong>{movie.Actors}</strong><br />
                        {movie.Plot}
                        </p>
                        <div style={{display:'flex', gap:'10px'}}>
                            <h3>{movie.Title},</h3>
                            <h3>{movie.Year}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}