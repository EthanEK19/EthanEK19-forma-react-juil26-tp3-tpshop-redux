import { items } from "../static-data";
import { useDispatch } from "react-redux";
import { editItemInCart } from "../store/actions/CartActions";

/*
    Composant à 2 Etat qui retourne un item
    selon son 'id' sous la forme d'une ligne <tr>.
    Le nombre de colone dépend de l'état.

    Liste des états:

    1) CART (Défault)
        -Nom de l'article 
        -Nom de l'article + IMG
        -Description
        -Quantité
        -Prixs (Prix unitaire + total produit)

    2) PANIER
        -Nom de l'article + IMG
        -Description
        -Prix (unitaire)
*/

function ModeProduit({ currentItem }) {
    const dispatch = useDispatch();
    return (
        <>
            <td>
                {currentItem.prix.toFixed(2)} €
            </td>
            <td>
                <button onClick={() => dispatch(editItemInCart(currentItem.id, 1))}>
                    🛒
                </button>
            </td>
        </>
    )
}

function ModeCart({ currentItem, units }) {
    const dispatch = useDispatch();
    return (
        <>
            <td>
                {units}
            </td>
            <td className="price-cell">
                <span className="unit-price">
                    {currentItem.prix.toFixed(2)} € × {units}
                </span>

                <span className="total-price">
                    {(currentItem.prix * units).toFixed(2)} €
                </span>
            </td>
            <td>
                <button onClick={() => dispatch(editItemInCart(currentItem.id, 1))}>
                    ➕
                </button>

                <button onClick={() => dispatch(editItemInCart(currentItem.id, -1))}>
                    ➖
                </button>
            </td>
        </>
    )
}

export default function Item({ id, units, mode = "CART" }) {

    const currentItem = items.find(item => item.id === id);

    return (
        <tr className="CartPage-item" key={currentItem.id}>
            <td className="product-cell">
                <img
                    src={currentItem.image}
                    alt={currentItem.nom}
                    className="product-image"
                />

                <span>{currentItem.nom}</span>
            </td>
            <td>
                {currentItem.description}
            </td>
            {
                (mode === "CART" ?
                    <ModeCart currentItem={currentItem} units={units} />
                    :
                    <ModeProduit currentItem={currentItem} />
                )}
        </tr>
    )
}
