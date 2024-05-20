import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header className="h-[60px] bg-white py-2 px-6 flex items-center justify-between">
            <div className="logo header-w w-[55px] h-[50px] overflow-hidden"></div>
            <Link to={'/'} className="font-bold">Home</Link>
            <ul className="flex items-center justify-center gap-10 font-bold">
                <li><Link to={'/'}>Travel</Link></li>
                <li><Link to={'/'}>Emotions</Link></li>
                <li><Link to={'/'}>Influence</Link></li>
                <li><Link to={'/'}>Expirience</Link></li>
            </ul>

            <div className="font-bold">Contacts</div>
        </header>
    );

};