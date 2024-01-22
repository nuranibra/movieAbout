import { useEffect, useState } from "react";
import Card from "../card/card.jsx";

export default function Cards ({movies, num, numer, setNumer}) {

    console.log(movies)

    return (
        <>
            <div style={{display:'flex', flexWrap:'wrap', gap:"20px", width:'100%', justifyContent:"center"}}>
                {movies}
            </div>
        </>
    );
}