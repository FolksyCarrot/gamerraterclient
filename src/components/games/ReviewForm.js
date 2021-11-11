import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router"
import { createReview, getSingleGame } from "./GameManager.js"


export const ReviewFrom = () => {
    const [game, setGame] = useState({})
    const [review, setReview] = useState({})
    const {gameId} = useParams()
    const history = useHistory()

    useEffect(() => {
        getSingleGame(gameId).then(data => setGame(data))
    }, [])


    return (
        <>
            <h1>Add a Review</h1>
            
            <textarea type ='text' onChange={(event) =>{
              const reviewState = {...review}
              reviewState.review = event.target.value 
              setReview(reviewState)
            }}></textarea>
            <button
            type='submit'
            onClick = {evt => {
                evt.preventDefault()
                const reviewObject = {
                    gameId: parseInt(gameId),
                    content: review.review,
                    createdOn: new Date().toISOString().slice(0,10)
                }

                createReview(reviewObject).then(history.push("/games"))
            }}>Submit</button>
        </>
    )

}