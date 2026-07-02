import { Link, Outlet } from 'react-router-dom'
import "./router.css";
import { useSelector } from "react-redux";

export default function Navigation() {
    
    /*Déclartion variables*/
    const cartLength = useSelector(state =>
        state.cart.reduce((sum, item) => sum + item.units, 0)
    );

    return (
        <div>
            <nav className="navbar">
                <ul className="nav-menu">
                    <li>
                        <Link className="nav-btn" to="/">
                            🏠 Produits
                        </Link>
                    </li>

                    <li>
                        <Link className="nav-btn" to="/cart">
                            🛒 Panier
                            {
                                (cartLength > 0) &&
                                <span className="cart-badge">{cartLength}</span>
                            }

                        </Link>
                    </li>
                </ul>
            </nav>

            <main>
                <Outlet />
            </main>
        </div>
    )
}