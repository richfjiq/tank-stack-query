import './App.css';
import { useRandom } from './hooks/useRandom';

function App() {
  const { randomQuery } = useRandom();

  return (
    <>
      {randomQuery.isFetching ? (
        <h1>Loading...</h1>
      ) : (
        <h1>Number: {randomQuery.data}</h1>
      )}

      {/* <RandomNumber /> */}

      <div>{JSON.stringify(randomQuery.error)}</div>
      <button
        disabled={randomQuery.isLoading}
        onClick={() => randomQuery.refetch()}
      >
        New Number
      </button>
    </>
  );
}

export default App;
