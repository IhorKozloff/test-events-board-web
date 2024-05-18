import { Outlet } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export const Layout = () => {
    return (
        <>
            <Header/>
            
            <main className="min-h-[100vh] flex flex-col items-center justify-start">
                <Outlet/>
            </main>

            <Footer/>
        </>
    );
};