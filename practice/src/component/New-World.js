import { useState } from 'react';
import UserName from './UserName';

export default function NewWorld(props) {
  //   let name = 'JunSu';
  const [name, setName] = useState('JunSu');
  const [age, setAge] = useState(props.age);
  const msg = props.age > 19 ? '성인입니다.' : '미성년자입니다.';

  //   function changeName() {
  //     // name = name === 'JunSu' ? 'JunJa' : 'JunSu';
  //     // console.log(name);
  //     // document.getElementById('name').innerText = name;
  //   }

  //   function changeAge() {
  //     setAge(age + 1);
  //   }

  console.log(props);

  return (
    <div>
      <h1>state</h1>
      <h2 id="name">
        {name} ({age}세) : {msg}
      </h2>
      <UserName name={name}></UserName>
      <button
        onClick={() => {
          setName(name === 'JunSu' ? 'JunJa' : 'JunSu');
          setAge(age + 1);
        }}
      >
        Change
      </button>
    </div>
  );
}
