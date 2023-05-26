
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Nav from './components/Nav';
import Card from './pages/Card';
import Favorites from './pages/Favorites';
import Details from './pages/Details';
import Watch from './pages/Watch';
import{ Context} from './Context';
import { useState } from 'react';


function App() {
  const [fussball, setFussball] = useState([
  {id : 1,
    name : "Venezia",
    state :"Italy",
    price : 500,
    description :"API-Football provides amazing coverage of football (soccer) teams, players, matches, predicted match results and more! You can see a complete list of all the possible endpoints in this high-level diagram they offer as a means of finding Conference League",
    photo :"https://crests.football-data.org/EUR.svg"
  },

  {id : 2,
    name : "Paris",
    state :"France",
    price : 600,
    description :"UEFA Conference League France API-Football provides amazing coverage of football (soccer) teams, players, matches, predicted match results and more! You can see a complete list of all the possible endpoints in this high-level diagram they offer ask.",
    photo : "https://crests.football-data.org/773.svg"
  },


  {id : 3,
    name : "ÖFB Cup",
    state :"Belgium",
    price : 470,
    description :"API-Football provides amazing coverage of football (soccer) teams, players, matches, predicted match results and more! You can see a complete list of all the possible endpoints in this high-level diagram they offer as a means of finding your footing, so to speak.",
    photo : "https://crests.football-data.org/805.svg"
  },
  {id : 4,
    name: "Playoffs",
    state :"Austria",
    price : 530,
    description :"API-Football provides amazing coverage of football (soccer) teams, players, matches, predicted match results and more! You can see a complete list of all the possible endpoints in this high-level diagram they offer as a means of finding your footing, so to speak.",
    photo : "https://crests.football-data.org/816.svg"
  },
  {id : 5,
    name : "Venezia",
    state :"Italy",
    price : 500,
    description :"API-Football provides amazing coverage of football (soccer) teams, players, matches, predicted match results and more! You can see a complete list of all the possible endpoints in this high-level diagram they offer as a means of finding Conference League",
    photo :"https://crests.football-data.org/EUR.svg"
  },

  {id : 6,
    name : "Paris",
    state :"France",
    price : 600,
    description :"UEFA Conference League France API-Football provides amazing coverage of football (soccer) teams, players, matches, predicted match results and more! You can see a complete list of all the possible endpoints in this high-level diagram they offer ask.",
    photo : "https://crests.football-data.org/773.svg"
  },


  {id : 7,
    name : "ÖFB Cup",
    state :"Belgium",
    price : 470,
    description :"API-Football provides amazing coverage of football (soccer) teams, players, matches, predicted match results and more! You can see a complete list of all the possible endpoints in this high-level diagram they offer as a means of finding your footing, so to speak.",
    photo : "https://crests.football-data.org/805.svg"
  },
  {id : 8,
    name: "Playoffs",
    state :"Austria",
    price : 530,
    description :"API-Football provides amazing coverage of football (soccer) teams, players, matches, predicted match results and more! You can see a complete list of all the possible endpoints in this high-level diagram they offer as a means of finding your footing, so to speak.",
    photo : "https://crests.football-data.org/816.svg"
  }
]);
  // useEffect(() => {
  //    //axios.get(`https://npiregistry.cms.hhs.gov/api/?version=2.1&city=baltimore`)
  //   //http://api.football-data.org/v4/competitions/&count=${count}`
  //   // axios.get('https://api.datamuse.com/words?ml=ringing+in+the+ears')
  //    // axios.get(`https://api.fda.gov/food/enforcement.json?limit=10`)
  //   //axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=b04350807bfef511722d92175c56e060&language=en-US`)
  //  // axios.get(`https://api.tvmaze.com/alternatelists/1/alternateepisodes?embed=episodes&_links`)
  //  // axios.get(`https://api.tvmaze.com/alternatelists/1/alternateepisodes?embed=episodes&_links`)  
  //   // axios.get(`https://jsonplaceholder.typicode.com/comments`)
  //   axios.get(`http://api.football-data.org/v4/competitions/`)
  //   .then(resp => {
  //      console.log(resp)
  //      setState(resp.data)})
  //     .catch(e => console.log(e))
  // }, [])

  // const getCount = (count) => {
  //   setCount(count)
  // }

  return (
    <BrowserRouter>
      <Nav />
      <Context.Provider value={fussball}>
        <Routes>
          <Route path="/login" exact element={<Login/>}/>
          <Route path="/register" exact element={<Register/>}/>
          <Route path="/" exact element={<Home />} />
          <Route path="/card" exact element={<Card />} />
          <Route path="/favorites" exact elemnt={<Favorites />} />
          <Route path="/Details/:id" exact element={<Details />} />
          <Route patn="/watch" exact elemnt={<Watch />} />
        </Routes>
      </Context.Provider>
    </BrowserRouter>
  )
}

export default App;
