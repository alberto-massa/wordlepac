import { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from './components/NavBar/NavBar';
import { Container, Spinner } from 'react-bootstrap';
import Wordle from './components/Wordle/Wordle';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [randomWord, setRandomWord] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          'https://random-word-api.herokuapp.com/word?length=5'
        );
        setRandomWord(response[0]);
      } catch (err) {
        console.error(err.message);
        //if api call fails, we'll always use "hello" as the game's solution
        setRandomWord('hello');
      }
      setLoading(false);
    };

    fetchData();
  }, [setRandomWord]);

  return (
    <>
      <NavBar />
      <Container className="mt-5">
        {loading ? (
          <Spinner className="spinner" animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <Wordle solution={randomWord} />
        )}
      </Container>
    </>
  );
};

export default App;
