import { useState, useEffect } from 'react';

const UseEffect = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  /* componentDidUpdate */
  useEffect(() => {
    // do not make the callback of useEffect asynchronous, declare another function
    /*  const myFuctionAsync = async () => {};
    myFuctionAsync.catch(null); */

    console.log('didUpdate effect');
  });
  /* componentDidMount */
  useEffect(() => {
    console.log('didMount effect');
    return () => {
      console.log('willlUnmount');
    };
  }, []);
  useEffect(() => {
    console.log('name cambio');
  }, [name]);
  return (
    <div>
      <h2>UseEffect</h2>
      <input
        value={name}
        onChange={({ target: { value } }) => setName(value)}
      ></input>
      <br></br>
      <br></br>
      <input
        age={age}
        onChange={({ target: { value } }) => setAge(value)}
      ></input>
    </div>
  );
};
export default UseEffect;
