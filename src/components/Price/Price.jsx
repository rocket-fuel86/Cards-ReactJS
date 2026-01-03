export default function Price( { price, currency } ) {
    return (
        <>
            <h5 className="card-text mb-0">{price} {currency}</h5>
        </>
    )
}