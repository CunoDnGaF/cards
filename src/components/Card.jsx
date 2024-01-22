const Card = function({title, text, children}) {
    return (
        <div className="card">
            {children}
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="card-text">{text}</p>
                <button className="btn-primary">Go somewhere</button>
            </div>
        </div>
    )
}

export default Card;