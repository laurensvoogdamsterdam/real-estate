import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route} from "react-router-dom";
import useNavigation from "./hooks/useNavigation";
import config from "./config";
import Navbar from "./components/Navbar";
import Tabbar from "./components/Tabbar";
import Home from './screens/Home';
import Store from './screens/Store'
import Inbox from './screens/Inbox'
import Profile from './screens/Profile'
import Discover from './screens/Discover'

export default function App() {
  const { currentRoute, setCurrentRoute } = useNavigation();
  // const [images, setImages] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [term, setTerm] = useState("");
  

  // useEffect(() => {
  //   fetch(
  //     `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setImages(data.hits);
  //       setIsLoading(false);
  //     })
  //     .catch((err) => console.log(err));
  // }, [term]);

  return (          
    <Router>
      <div className='bg-gray-200 h-screen'>
      <Navbar
        navigationData={config.nav}
        currentRoute={currentRoute}
        setCurrentRoute={setCurrentRoute}
      />
      <Tabbar
        navigationData={config.nav}
        currentRoute={currentRoute}
        setCurrentRoute={setCurrentRoute}
        />
        
        

      <main>        
        <Routes>
            <Route path="/home" element={<Home />} />            
            <Route path="/store" element={<Store/>}/>            
            <Route path="/profile" element={<Profile />} />            
            <Route path="/discover" element={<Discover/>}/>            
            <Route path="/inbox" element={<Inbox/>}/>            
            <Route path="/" element={<Home/>}/>            

        </Routes>        
        </main>
      </div>
    </Router>
  )
}
