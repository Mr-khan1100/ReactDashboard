import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './components/Home';
import '../src/App.css';

function App() {

  return (
    <>
    <BrowserRouter>

      {/* <Layout> */}
        <Routes>
          {/* Authentication Routes (Without Navbar & SideNavBar) */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Main App Routes (With Navbar & SideNavBar) */}
          <Route path="/" element={<Home/>} />
          {/* <Route path="/" element={} /> */}
        </Routes>
      {/* </Layout> */}

    </BrowserRouter>
    </>
  );
}

export default App;
