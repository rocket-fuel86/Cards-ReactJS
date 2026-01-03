export default function Thumbnail({ src, alt }) {
    return (
        <>
            <img className="card-img-top" src={ src } alt={ alt } />
        </>
    )
}