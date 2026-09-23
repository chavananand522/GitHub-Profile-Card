
import { useState } from 'react';
import './App.css';
import axios from 'axios';
import SearchForm from './Components/SearchForm';
import GithubCard from './Components/GithubCard';

function App() {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState('');

  const fetchuserdata = async (username) => {
    setloading(true);
    seterror('');
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`)
      setuser(response.data)
    } catch (error) {
      seterror("User not found!")
    } finally {
      setloading(false);
    }
  }

  return (
    <div className="App">
      <h1>GitHub Project</h1>
      <SearchForm onsearch={fetchuserdata} />
      {loading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      {user && <GithubCard user={user} />}
    </div>
  );
}

export default App;
