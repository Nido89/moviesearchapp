import React from 'react'

export default function Popup({selected, closePopup}) {
    return (
       <section className="popup">
           <div className="content">
                <h4>{selected.Title}<span>({selected.Year})</span></h4>
                <p className="rating">Rating: {selected.imdbRating}</p>
                <div className="plot">
                    <img src={selected.Poster} alt="" />
                    <p>{selected.Plot}</p>
                </div>
                <button className="close" onClick={closePopup}>Close </button>

            </div>
       </section>
    )
}
