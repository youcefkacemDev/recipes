export default function Item({ item }) {
    return (
        <div key={item.id}>
            <p className="display-6">
                {item.name} {item.amount} {item.unit}
            </p>
            <img
                src={`https://spoonacular.com/cdn//ingredients_100x100/${item.image}`}
                alt=""
            />
        </div>
    );
}
