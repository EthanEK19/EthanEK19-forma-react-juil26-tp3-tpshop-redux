import { useEffect, useState } from "react";
import Item from "./Item";
import { items } from "../static-data";
import { useSelector } from "react-redux";

export default function Cart() {

    const cart = useSelector(state => state.cart);
    const [totalPrix, setTotalPrix] = useState(0);

    useEffect(() => {
        const tmpTotalPrice = cart.reduce((sum, cItem) => {
            const item = items.find(item => item.id === cItem.id);

            if (!item) return sum;

            return sum + item.prix * cItem.units;
        }, 0);
        setTotalPrix(tmpTotalPrice);
    }, [cart]);

    return (
        <>
            <h2>Mon Panier</h2>

            <table>
                <thead>
                    <th>Produits</th>
                    <th>Déscription</th>
                    <th>Quantité</th>
                    <th>Prix</th>
                    <th></th>
                </thead>
                <tbody>
                    {
                        (cart.length <= 0) &&
                        <tr>
                            <td colSpan={5} className="empty-cart">
                                Votre panier est vide
                            </td>
                        </tr>
                    }
                    {
                        (cart.length > 0) &&
                        cart.map((cItem) => {
                            return (
                                <Item
                                    key={cItem.id}
                                    id={cItem.id}
                                    units={cItem.units}
                                    mode="CART"
                                />
                            )
                        })}
                </tbody>

                <tfoot>
                    <tr className="cart-total-row">
                        <td colSpan={3} className="total-label">
                            TOTAL :
                        </td>
                        <td colSpan={2} className="total-value">
                            {totalPrix.toFixed(2)} €
                        </td>
                    </tr>
                </tfoot>
            </table>

        </>
    )
}