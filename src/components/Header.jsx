import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <h1><Link to="/">Fake Jewelry</Link></h1>
            <nav>
                <Link to="/jewelry">Jewelry</Link>
            </nav>
        </header>
    );
}