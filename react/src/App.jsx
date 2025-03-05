import { useState } from 'react';
import './App.css';
import Select from 'react-select';
import { peopleDescriptions } from './peopleDescriptions';
import { coinTypes } from './coinTypes';

function App() {
  const [person, setPerson] = useState('');
  const [coinType, setCoinType] = useState('');
  const [grade, setGrade] = useState('');
  const [flaws, setFlaws] = useState('');
  const [description, setDescription] = useState('Hello, I am the description placeholder!');

  const generateDescription = () => {
    console.log(person.label)
    console.log(coinType.label)

    const desc = `${coinType.value}\n\n${person.value}`;
    console.log(desc)
    setDescription(desc);
  }

  return (
    <>
      <h1>Roman Coin Description Generator</h1>
      <div className='select'>
        <Select
          defaultValue={person}
          onChange={setPerson}
          options={peopleDescriptions}
        />
        <Select
          defaultValue={coinType}
          onChange={setCoinType}
          options={coinTypes}
        />
      </div>
      <button onClick={() => generateDescription()}>
        Generate description
      </button>
      <div className='description'>
        {description}
      </div>
    </>
  )
}

export default App
