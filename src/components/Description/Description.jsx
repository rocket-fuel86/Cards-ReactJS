import "./Description.css"

export default function Description({ title, text }) {
    return (
        <div className="wrapper">
            <p className="title">{ title }</p>
            <p className="description">{ text }</p>
        </div>
    )
}