import React from 'react';
import Items from '../items/Items';
import Table from 'react-bootstrap/Table';
import './ResultBody.css';

class ResultBody extends React.Component{
// The logic initially written in the App.js file was incorrect. It would have only printed Fizz, Buzz and FizzBuzz if the numbers were 3,5,15 respectively.
// For the game to work, the number has to be divisible by 3,5,15 so I used the Mod operator and checked if the remainder is 0
// if the number is 0 or if the number is not divisible be 3,5 or 15, return number 
//else return Fizzbuzz for number divisible by 15, Buzz for number divisible by 5 and Fizz for number divisible by 3

fizzBuzzCountDown(number){
      return  Array.from({ length: number })
          .map((_, n) =>
           n === 0 ? 0 : n % 15===0 ? "FizzBuzz" : n % 5===0 ? "Buzz" : n % 3 === 0 ? "Fizz" : n
          )
          .join(", ")
    }

 render(){
         // Convert the String to an array to pass the elements to the Items component
    const list = this.fizzBuzzCountDown(this.props.number).split(', ').map((num,index) => {
        return <Items key={index} number={num}/>
     })
    return(
        <div className="Result-Body">
    <Table className="Result-Body" bordered hover size="sm">
            <tbody>{list}</tbody>
    </Table>
        </div>
    )
 }
}

export default ResultBody;