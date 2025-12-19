import "./Button.css"

export default function Button({ customOnClick, text }) {
    return (
        <>
            <button onClick={ customOnClick } className="button">{text}</button>
        </>
    )
}