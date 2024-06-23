//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Main';
import Page from './Page';
import Posts from './Posts';


function App() {
    return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/page" element={<Page />}></Route>
            <Route path="/posts" element={<Posts />}></Route>
            <Route path="/posts/:name" element={<Posts />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
