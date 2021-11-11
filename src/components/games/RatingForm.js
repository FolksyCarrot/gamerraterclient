import React, { useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom'
import { createRating } from './GameManager.js'


export const RatingForm = () => {
    const [rating, setRating] = useState(5)
    const history = useHistory()
    const {gameId} = useParams()

    return(
        <>
            <input type="range" min="1" max="10" value = {rating} class="slider" id="myRange" onChange={(event) => {
                    setRating(event.target.value)
                }} /> rating: {rating}

                <button onClick ={()=> {
                    let object = {
                        game_id: gameId,
                        rating : rating
                       
                    }
                    createRating(object).then(() => history.push("/games"))
                }}>Submit</button>
        </>
    )
    }


