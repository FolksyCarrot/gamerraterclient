export const getGames = () => {
    return fetch("http://localhost:8000/games", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const createGame = (game) => {
    return fetch("http://localhost:8000/games", { method:"POST", headers:{
        "Authorization": `Token ${localStorage.getItem("lu_token")}`,
        "Content-Type": "application/json"
    }, body: JSON.stringify(game)})
        .then(getGames)
}

export const getGameTypes = () => {
    return fetch("http://localhost:8000/gametypes", { headers:{
        "Authorization": `Token ${localStorage.getItem("lu_token")}`
    }})
        .then(response => response.json())
}

export const getSingleGame = (id) => {
    return fetch(`http://localhost:8000/games/${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const getReviews = () => {
    return fetch("http://localhost:8000/reviews", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const createReview = (review) => {
    return fetch("http://localhost:8000/reviews", { method:"POST", headers:{
        "Authorization": `Token ${localStorage.getItem("lu_token")}`,
        "Content-Type": "application/json"
    }, body: JSON.stringify(review)})
        .then(getReviews)
}

export const getRatings = () => {
    return fetch("http://localhost:8000/ratings", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}


export const createRating = (rating) => {
    return fetch("http://localhost:8000/ratings", { method:"POST", headers:{
        "Authorization": `Token ${localStorage.getItem("lu_token")}`,
        "Content-Type": "application/json"
    }, body: JSON.stringify(rating)})
        
}