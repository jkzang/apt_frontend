const Listing = (apt) => {
    return(
        <div>
        <h1>{apt.street}</h1>
        <p>{apt.city}</p>
        <p>{apt.zip}</p>
        <p>{apt.state}</p>
        <p>{apt.country}</p>
        </div>
    )
}

export default Listing
