export default function FoodItem({ food, setFoodId }) {
    return (
        <div className=" rounded rounded-5 m-4 bg-warning-subtle shadow ">
            <img src={food.image} alt="" className="rounded-5 shadow m-4" />
            <h1 className="ps-5 display-3 text-black fw-bold">{food.title}</h1>
            <button
                className="btn btn-danger p-3 btn-lg m-5 fw-bold shadow"
                onClick={() => {
                    setFoodId(food.id);
                }}
            >
                <i class="bi bi-book-half me-2"></i>
                View Recipe
            </button>
        </div>
    );
}
