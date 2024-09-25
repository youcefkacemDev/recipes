import Item from "./Item";

export default function ListItem({ isLoading, food }) {
    return (
        <div>
            {isLoading
                ? "loading..."
                : food.extendedIngredients.map((item) => <Item item={item} />)}
        </div>
    );
}
