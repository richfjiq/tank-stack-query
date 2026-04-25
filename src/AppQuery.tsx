import { useQuery } from '@tanstack/react-query';
import './App.css';

const getCryptoNumber = async (): Promise<number> => {
  throw 'No se pudo obtener el número';
  const response = await fetch(
    'https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new',
  ).then((res) => res.json());
  return Number(response);
};

function App() {
  const {
    isLoading,
    isFetching,
    error,
    data: number,
    refetch,
  } = useQuery({
    queryKey: ['randomNumber'],
    queryFn: getCryptoNumber,
    staleTime: 1000 * 60,
    // retry: false,
    // refetchOnWindowFocus: true,
  });

  return (
    <>
      {isFetching ? <h1>Loading...</h1> : <h1>Number: {number}</h1>}

      {/* <RandomNumber /> */}

      <div>{JSON.stringify(error)}</div>
      <button disabled={isLoading} onClick={() => refetch()}>
        New Number
      </button>
    </>
  );
}

export default App;
