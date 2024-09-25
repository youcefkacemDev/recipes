import FoodItem from "./FoodItem";

export default function FoodList({ foodData, setFoodId }) {
    return (
        <div className="container">
            {foodData.map((food) => (
                <FoodItem setFoodId={setFoodId} key={food.id} food={food} />
            ))}
        </div>
    );
}
