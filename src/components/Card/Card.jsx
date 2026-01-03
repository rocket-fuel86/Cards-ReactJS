import Thumbnail from "../Thumbnail/Thumbnail"
import Description from "../Description/Description"
import Price from "../Price/Price"
import Button from "../Button/Button"
import { useState } from "react"
import thumbnail from "../../img/thumbnail.png"

export default function Card() {
    const [_added, setAdded] = useState(false)

    const handleClick = () => {
        setAdded(true)
    }

    return (
        <div className="card w-25">
            <Thumbnail src={ thumbnail } alt={"thumbnail"} />
            <div className="card-body">
                <Description title="Lorem" text="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
                <div className="d-flex justify-content-between align-items-center">
                    <Price price={12.99} currency={'$'} />
                    <Button customOnClick={handleClick} text={"Add to cart"} />
                </div>
            </div>
        </div>
    )
}