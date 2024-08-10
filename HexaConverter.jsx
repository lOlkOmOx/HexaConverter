import React, {useState} from "react";
import BackButton from "./BackButton";
import '../Styles/HexaConverter.css'

function HexaConverter() {

    const [input, setInput] = useState(0)
    const [result, setResult] = useState("_")

    function convertToHexadecimal(event) {
        event.preventDefault()
        let result = []; //result array
    
    //input validation   
    
    //check if input is number
        if(isNaN(input)){
            setResult("Value " + input + " is not a number.")
            return
            }
    //check if input is integer
        else if(input%1 !== 0){
            setResult("Value " + input + " is not integer.")
            return
        } 
    //check if input is not negative
        else if(input <= 0){
            setResult("Value " + input + " is negative.")
            return
        } 
    //after da´ta validation, continue with code
        else {
    
            //loop to find a reminder, pushing it in result variable
            for (let i=input;i>0;i=parseInt(i/16)) {
                result.push(i%16);
            }
    
            //reversing result to correct order
            result = result.reverse(); 
    
            //transform numbers between 10-15 to hexadecimal
            for (let i=0;i<result.length;i++) {
                if (result[i] === 10){
                    result[i] = "A"
                } else if (result[i] === 11){
                    result[i] = "B"
                } else if (result[i] === 12){
                    result[i] = "C"
                } else if (result[i] === 13){
                    result[i] = "D"
                } else if (result[i] === 14){
                    result[i] = "E"
                } else if (result[i] === 15){
                    result[i] = "F"
                }
            }
    
            //unite results from numbers and strings to string only
            result = result.join("");  
    
            //stopping function and logging the result
            console.log(result)
            setResult(result)
            return result;
        } 
     }

     const handleInput = (event) => {
        setInput(event.target.value);
      };

    return(
        <>
            <div className="HexaConverter">
                <h1 className="siteName">Hexa converter</h1>
                <p className="result">{result}</p>
                <form>
                    <input className="hexaInput" onChange={handleInput}  autoFocus/>
                    <button className="hexaButton" type="submit" onClick={convertToHexadecimal}>Sumbit</button>
                </form>
                
                <BackButton/>
            </div>
        </>
    )
}

export default HexaConverter