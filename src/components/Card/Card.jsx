import "./Card.css"
import Thumbnail from "../Thumbnail/Thumbnail"
import Description from "../Description/Description"
import Price from "../Price/Price"
import Button from "../Button/Button"
import { useState } from "react"

export default function Card() {
    const [added, setAdded] = useState(false)

    const handleClick = () => {
        setAdded(true)
    }

    return (
        <div className="card">
            <Thumbnail src={"https://picsum.photos/400/200"} alt={"thumbnail"} />
            <Description title="Lorem" text="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
            <div className="card-bottom">
                <Price price={12.99} currency={'$'} />
                <Button customOnClick={handleClick} text={"Add to cart"} />
            </div>
        </div>
    )
}