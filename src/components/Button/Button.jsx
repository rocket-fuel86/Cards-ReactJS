export default function Button({ customOnClick, text }) {
    return (
        <>
            <button onClick={ customOnClick } className="btn btn-secondary mb-0">{text}</button>
        </>
    )
}