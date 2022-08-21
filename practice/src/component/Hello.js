import styles from './Hello.module.css';

export default function Hello() {
  function showName() {
    console.log('junsu');
  }

  function showAge(age) {
    console.log(age);
  }

  return (
    <div>
      <h1
        style={{
          color: '#f00',
          borderRight: '12px solid #000',
          marginBottom: '50px',
          opacity: 1,
        }}
      >
        Hello
      </h1>
      <div className={styles.box}>Hello</div>
      <button onClick={showName}>Show name</button>
      <button
        onClick={() => {
          showAge(25);
        }}
      >
        Show age
      </button>
      <input
        type="text"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      ></input>
    </div>
  );
}
