import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ResultBody from './components/result/ResultBody';



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});



const resultBody = new ResultBody();

test('correctly counts fizzes', ()=>{
  let count = 0;
  let result =  resultBody.fizzBuzzCountDown(100).split(',');
  for(let num of result){
    if (num.trim() === 'Fizz')
    count = count + 1;
  }
  console.log(count);
  expect(count).toEqual(27);
});

test('correctly counts Buzzes', ()=>{
  let count = 0;
  let result =  resultBody.fizzBuzzCountDown(100).split(',');
  for(let num of result){
    if (num.trim() === 'Buzz')
    count = count + 1;
  }
  expect(count).toEqual(13);
  });
  
test('correctly counts FizzBuzzes', ()=>{
  let count = 0;
    let result =  resultBody.fizzBuzzCountDown(100).split(',');
    for(let num of result){
      if (num.trim() === 'FizzBuzz')
        count = count + 1;
    }
    expect(count).toEqual(6);
    });

test('correctly counts non FizzBuzz Numbers', ()=>{
  let count = 0;
  let result =  resultBody.fizzBuzzCountDown(100).split(',');
  for(let num of result){
    let temp = parseInt(num)
      if (isNaN(temp) == false)
        count += 1
  }
  expect(count).toEqual(54);
  });
    