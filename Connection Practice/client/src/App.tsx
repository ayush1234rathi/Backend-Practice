import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

interface Joke {
  id: number
  title: string
  des: string
}

function App() {
  const [jokes, setJokes] = useState<Joke[]>([])
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string|null>(null);  
  useEffect(() => {
    axios
      .get<Joke[]>('/api/jokes')
      .then((res) => {
        setJokes(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching jokes:', err);
        setError('Failed to fetch jokes');
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <p>Loading jokes...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
    <h2>Total Number of Jokes: {jokes.length}</h2>
    <ul>
    {
      jokes.map((item)=>(
        <li key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.des}</p>
        </li>
      ))
    }
    </ul>
      
    </>
  )
}

export default App
