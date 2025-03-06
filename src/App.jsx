import { useState, useEffect } from 'react';
import './App.scss';
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
  const [description, setDescription] = useState('Hello, I am the description placeholder!\n\n' +
    'Use the select dropdowns above to choose the attributes of the coin you\'re looking at.  ' +
    'Then click the button to see a full description with the person, coin type, and more!  ' +
    'You\'ll need to add the obverse/reverse descriptions to the listing description separately.');
  const [isCopied, setIsCopied] = useState(false);
  const [copyButtonClass, setCopyButtonClass] = useState('copy-button');
  const [copyButtonText, setCopyButtonText] = useState('Copy Description');

  const generateDescription = () => {
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

    setDescription(desc);
  }

  const copyButtonOnClick = () => {
    navigator.clipboard.writeText(description);
    setIsCopied(true)
  };

  useEffect(() => {
    if (isCopied) {
      setCopyButtonClass('copy-button__copied');
      setCopyButtonText('Copied!');
      setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    } else {
      setCopyButtonClass('copy-button');
      setCopyButtonText('Copy Description');
    }
  }, [isCopied]);

  return (
    <div className="flex-gap">
      <h1>Roman Coin Description Generator</h1>
      <div className='select-container'>
        <div className='select'>
          Person on the coin:
          <Select
            defaultValue={person}
            onChange={setPerson}
            options={peopleDescriptions}
          />
        </div>
        <div className='select'>
          Coin type:
          <Select
            defaultValue={coinType}
            onChange={setCoinType}
            options={coinTypes}
          />
        </div>
        <div className='select'>
          Grade:
          <Select
            defaultValue={grade}
            onChange={setGrade}
            options={grades}
          />
        </div>
        <div className='select'>
          Flaws, if any:
          <Select
            defaultValue={flaws}
            onChange={setFlaws}
            options={flawDescriptions}
            isMulti
          />
        </div>
      </div>
      <div className="button-container">
        <button onClick={() => generateDescription()}>
          Generate description
        </button>
        <button
          className={copyButtonClass}
          onClick={copyButtonOnClick}
        >
          {copyButtonText}
        </button>
      </div>
      <div className='description'>
        {description}
      </div>
    </div>
  )
}

export default App
