import './assets/scss/style.scss';
import 'swiper/css';
import 'swiper/css/navigation';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from 'pages/LandingPage';

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Route path="/" component={<LandingPage />} />
      </Router> */}
      <LandingPage />
    </div>
  );
}

export default App;
