import './assets/scss/style.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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
