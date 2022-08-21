import React from 'react';
import useFetch from '../hooks/useFetch';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IDay } from './DayList';

export default function CreateWord() {
  const days: IDay[] = useFetch('http://localhost:3001/days');
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!isLoading && engRef.current && korRef.current && dayRef.current) {
      setIsLoading(true);

      const eng = engRef.current.value;
      const kor = korRef.current.value;
      const day = dayRef.current.value;

      fetch(`http://localhost:3001/words`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          eng,
          kor,
          day,
          isDone: false,
        }),
      }).then((res) => {
        if (res.ok) {
          alert('생성이 완료 되었습니다.');
          navigate(`/day/${day}`);
          setIsLoading(false);
        }
      });
    }
  }

  const engRef = useRef<HTMLInputElement>(null);
  const korRef = useRef<HTMLInputElement>(null);
  const dayRef = useRef<HTMLSelectElement>(null);

  return (
    <form onSubmit={onSubmit}>
      <div className="input_area">
        <label>Eng</label>
        <input type="text" placeholder="computer" ref={engRef}></input>
      </div>
      <div className="input_area">
        <label>Kor</label>
        <input type="text" placeholder="컴퓨터" ref={korRef}></input>
      </div>
      <div className="input_area">
        <label>Day</label>
        <select ref={dayRef}>
          {days.map((day) => (
            <option key={day.id} value={day.day}>
              {day.day}
            </option>
          ))}
        </select>
      </div>
      <button>{isLoading ? 'Saving...' : '저장'}</button>
    </form>
  );
}
