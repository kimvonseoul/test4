//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Main';
import Page from './Page';
import Posts from './Posts';


function App() {
    return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path={process.env.PUBLIC_URL + '/'} element={<Main />}></Route>
            <Route path={process.env.PUBLIC_URL + "/page"} element={<Page />}></Route>
            <Route path={process.env.PUBLIC_URL + "/posts"} element={<Posts />}></Route>
            <Route path={process.env.PUBLIC_URL +"/posts/:name"} element={<Posts />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
