
import { Button } from "antd"
import { useState } from "react"

export function ButtonDisplay() {
    const [buttonType , setButtonType] = useState({type: "primary" , danger: false , ghost: false , size: "large"  })
    const types = ["primary" , "link" , "dashed" , "text"]
    const sizes = ["large" , "small" , "middle"]
    const boolOptions = [true , false]
    const randomTypeNumber = Math.floor(Math.random() * 5)
    const randomBoolNumber = Math.floor(Math.random() * 2)
    const randomSizeNumber = Math.floor(Math.random() * 3)
    function handleOnButtonClick() {
        setButtonType({type: types[randomTypeNumber] , danger: boolOptions[randomBoolNumber] , ghost: boolOptions[randomBoolNumber] , size: sizes[randomSizeNumber] })
    }
    
    return (
        <Button  onClick={handleOnButtonClick} size={buttonType.size} type={buttonType.type} danger={buttonType.danger} ghost={buttonType.ghost} >this is a dynamic button</Button>
    )
}