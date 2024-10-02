import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Tasks from '../pages/Tasks';
import Settings from '../pages/Settings';

const RoutesConfig = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/settings" element={<Settings />} />
        </Routes>
    );
};

export default RoutesConfig;
