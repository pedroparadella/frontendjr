import React from 'react'

const Card = (props) => {
    const {name, title, cheapest, deal} = props;

    return (
        <div className="card">
            <p>{name}</p>
            <p>{title}</p>
            <p>{cheapest}</p>
            <p>{deal}</p>
        </div>
    )
}

export default Card