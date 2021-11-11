import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router"
import { getSingleGame } from './GameManager.js'

export const GameDetails = () => {
    const [game, setGame] = useState({})
    const {gameId} = useParams()
    const history = useHistory()
    useEffect(() => {
        getSingleGame(gameId).then(data => setGame(data))
    }, [])

    return(
        <>
            {console.log(game)}
            <div>{game.description}</div>
            <div>Number of Players: {game.number_of_players}</div>
            <h2>Reviews</h2>
            {game.reviews?.map(review => {
                return(
                    <>
                        <div>"{review.content}"- {review.rater.user.first_name} {review.rater.user.last_name}</div>
                    </>
                )
            })}
            <button
            onClick={()=> {
                history.push(`/games/${gameId}/reviewForm`)
            }}>Add review</button>

        </>
    )

}