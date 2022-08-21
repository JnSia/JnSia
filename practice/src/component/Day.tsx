// import dummy from '../DB/data.json';
import React from 'react';
import { useParams } from 'react-router-dom';
import Word, { IWord } from './Word';
import { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';

export default function Day() {
  const { day } = useParams<{ day: string }>();
  const words: IWord[] = useFetch(`http://localhost:3001/words?day=${day}`);

  // const wordList = dummy.words.filter((word) => word.day === Number(day));

  // const [words, setWords] = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:3001/words?day=${day}`)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setWords(data);
  //     });
  // }, []);

  return (
    <div>
      <h2>Day {day}</h2>
      {words.length === 0 && <span>Loading...</span>}
      <table>
        <tbody>
          {words.map((word) => (
            <Word word={word} key={word.id}></Word>
          ))}
        </tbody>
      </table>
    </div>
  );
}
