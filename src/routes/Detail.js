import { useEffect } from "react";
import {useParams} from "react-router-dom";

function Detail() {
    // {id}== id:특정id  , id == 특정id(속성값만)
    const {id} = useParams()
    console.log(id)
    const getMovie = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
            console.log(json)
    }
    useEffect(()=>{
        getMovie();
    }, []);
    return <h1>Detail</h1>;
}

export default Detail;