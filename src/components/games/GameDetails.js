import React, { useState, useEffect } from "react"
import { useParams } from "react-router"
import { getSingleGame } from './GameManager.js'

export const GameDetails = () => {
    const [game, setGame] = useState({})
    const {gameId} = useParams()
    useEffect(() => {
        getSingleGame(gameId).then(data => setGame(data))
    }, [])

    return(
        <>
           <div>{game.description}</div>
            <div>Number of Players: {game.number_of_players}</div>
        </>
    )

}