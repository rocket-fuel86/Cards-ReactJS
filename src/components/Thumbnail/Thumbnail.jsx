import "./Thumbnail.css"

export default function Thumbnail({ src, alt }) {
    return (
        <>
            <img className="thumbnail" src={ src } alt={ alt } />
        </>
    )
}