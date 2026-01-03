export default function Description({ title, text }) {
    return (
        <>
            <h5 className="card-title">{ title }</h5>
            <p className="card-text">{ text }</p>
        </>
    )
}