import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectMovie } from '../../features/MoviesSlice'
import RecommendationCard from './RecommendationCard'
import './Recommendatuions.css'
function Recommendations() {

    let [recommendation, setRecommendation] = useState([])
    const movies = useSelector(selectMovie)

    useEffect(async () => {
        if (movies.length > 0) {
            let payload = []
            for (let i = 0; i < movies.length; i++) {
                payload.push(movies[i].title)
            }
            var data = JSON.stringify({
                "movies": payload
            });

            var config = {
                method: 'post',
                url: 'https://movie-recom-ml.herokuapp.com/recommend',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };

            axios(config)
                .then(function (response) {
                    // console.log(response.data);
                    setRecommendation(response.data.reverse())
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            setRecommendation([])
        }
    }, [movies])

    return (
        <div className="contaienr">
            <div className="columns p-2">
                {recommendation && recommendation.length !== 0 ? (<h1 className="heading">Recommendations</h1>) : null}
                <div className="cards-container">
                    {
                        recommendation && recommendation.length !== 0 ? (
                            recommendation.map(rec => {
                                return <RecommendationCard key={rec.id} name={rec.name} genre={rec.genre} />
                            })
                        ) : 'No Recommendations'
                    }
                </div>
            </div>
        </div>
    )
}

export default Recommendations
