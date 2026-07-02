import { items } from "../static-data";
import Item from "./Item";

export default function Product({ editItemInCart }) {
    return (
        <>
            <h2>Liste des produits</h2>

            <table>
                <thead>
                    <th>Produits</th>
                    <th>Déscription</th>
                    <th>Prix</th>
                    <th></th>
                </thead>
                <tbody>
                    {items.map((item) => {
                        return (
                            <Item
                                key={item.id}
                                id={item.id}
                                units={0}
                                mode="PRODUIT"
                            />
                        )
                    })}
                </tbody>
            </table>

        </>
    )
}