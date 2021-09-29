import styles from './App.css';
import logo from './logo.svg';


function App(): JSX.Element {
  return (
    <div className={styles.App}>
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          <code>src/App.tsx</code>
          and save to reload.
        </p>
        <a
          href="https://reactjs.org"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
