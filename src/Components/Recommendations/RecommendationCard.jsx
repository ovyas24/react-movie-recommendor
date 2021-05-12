import React from 'react'

function RecommendationCard({ name, genre }) {
    return (
        <div className="column is-3">
            <div className="card">
                <header className="card-header">
                    <p className="card-header-title">
                        {name}
                    </p>
                </header>
                <div className="card-content">
                    <div className="content">
                        Genre : {genre}
                    </div>
                </div>
                <footer className="card-footer">
                    <a href="#" className="card-footer-item">Add To Favrouits</a>
                </footer>
            </div>
        </div>
    )
}

export default RecommendationCard
