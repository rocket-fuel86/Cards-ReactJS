import "./Price.css"

export default function Price( { price, currency } ) {
    return (
        <>
            <p className="price">{price} {currency}</p>
        </>
    )
}