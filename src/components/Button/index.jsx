
import { Button } from "antd"
import { useState } from "react"

export function ButtonDisplay() {
    const [buttonType , setButtonType] = useState({type: "primary" , danger: false , ghost: false  })
    const types = ["primary" , "link" , "dashed" , "text"]
    const boolOptions = [true , false]
    const randomTypeNumber = Math.floor(Math.random() * 4)
    const randomBoolNumber = Math.floor(Math.random() * 2)
    function handleOnButtonClick() {
        setButtonType({type: types[randomTypeNumber] , danger: boolOptions[randomBoolNumber] , ghost: boolOptions[randomBoolNumber] })
    }
    
    return (
        <Button  onClick={handleOnButtonClick} type={buttonType.type} danger={buttonType.danger} ghost={buttonType.ghost} >this is a dynamic button</Button>
    )
}