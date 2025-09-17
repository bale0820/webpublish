import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/router/Layout.jsx';
import { Login } from './components/form/Login.jsx';
import { Signup } from './components/form/Signup.jsx';
import { Home } from './components/router/Home.jsx';
import { About } from './components/router/About.jsx';
import { Support } from './components/router/Support.jsx';
export default function App() {
    return (

        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} ></Route>
                         <Route path='/login' element={<Login />} ></Route>
                          <Route path='/singup' element={<Signup />} ></Route>
                           <Route path='/about' element={<About />} ></Route>
                            <Route path='/support' element={<Support />} ></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}