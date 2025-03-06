import { useState } from 'react';
import './App.css';
import Select from 'react-select';
import { peopleDescriptions } from './peopleDescriptions';
import { coinTypes } from './coinTypes';
import { grades } from './grades';
import { flawDescriptions } from './flaws';

function App() {
  const [person, setPerson] = useState(peopleDescriptions[0]);
  const [coinType, setCoinType] = useState(coinTypes[1]);
  const [grade, setGrade] = useState(grades[5]);
  const [flaws, setFlaws] = useState([flawDescriptions[0]]);
  const [description, setDescription] = useState('Hello, I am the description placeholder!');

  const generateDescription = () => {
    console.log(person.label)
    console.log(coinType.label)
    console.log(flaws)

    var flawText = '';
    flaws.forEach(flaw => {
      flawText += `${flaw.value && `  `}${flaw.value}`;
    });

    const gradeTextFirstHalf = `This coin was graded ${grade.label} (${grade.value}) by the ` +
      `Numismatic Grading Company, the official grading service of the American Numismatic ` +
      `Association and the Professional Numismatists Guild.  Here is a `;
    const gradeTextSecondHalf = ` used by the NGC, as well as information about Strike, ` +
      `Surface, and Style ratings.${flawText}`;

    const desc = <div>
      {coinType.value}
      <br/>
      <br/>
      {person.value}
      <br/>
      <br/>
      {gradeTextFirstHalf}
      <a href="https://www.ngccoin.com/specialty-services/ancient-coins/grading.aspx">
        list of grades
      </a>
      {gradeTextSecondHalf}
    </div>

    const desc2 = <span>BOO!</span>;
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
        <Select
          defaultValue={grade}
          onChange={setGrade}
          options={grades}
        />
        <Select
          defaultValue={flaws}
          onChange={setFlaws}
          options={flawDescriptions}
          isMulti
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
