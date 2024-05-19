import { Route, Routes } from 'react-router-dom';
import { Layout } from './Pages/Layout';
import { HomePage } from './Pages/HomePage';
import { SubscribePage } from './Pages/SubscribePage';
import { EventDetailsPage } from './Pages/EventDetailsPage';

function App() {
    return (
        <Routes>

            <Route path="/" element={<Layout/>}>

                <Route index element={<HomePage/>}/>
                <Route path="/:eventId" element={<EventDetailsPage/>}/>
                <Route path="/:eventId/subscribe" element={<SubscribePage/>}/>

            </Route>

        </Routes>
    );
}

export default App;
