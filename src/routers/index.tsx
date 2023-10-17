import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/home';
import { Repos } from '../pages/repos';


const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} ></Route>
                <Route path='/repos/:username' element={<Repos />} ></Route>
            </Routes>
        </BrowserRouter>
    )
}

export { Routers }