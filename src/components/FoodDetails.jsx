import { useEffect, useState } from "react";
import ListItem from "./ListItems";

export default function FoodDetails({ foodId }) {
    const [food, setFood] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    // state we're going to use to display the information of our recipe
    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
    // now the url is constructed
    const API_KEY = import.meta.env.VITE_API_KEY;
    // the api key is set

    useEffect(() => {
        async function fetchDate() {
            const res = await fetch(`${URL}?apiKey=${API_KEY}`);
            const recipeInformation = await res.json();
            setFood(recipeInformation);
            setIsLoading(false);
        }
        fetchDate();
    }, [foodId]);

    return (
        <div className="rounded rounded-5 m-4 p-5 bg-warning-subtle shadow ">
            <div className="h1 my-4">
                <strong>{food.title}</strong>
            </div>
            <div>
                <img
                    src={food.image}
                    alt=""
                    className="rounded rounded-5 w-100"
                />
            </div>
            <div className="display-1">
                <strong>
                    Price $ {(food.pricePerServing / 100).toFixed(2)}
                </strong>
            </div>
            <div>
                <span className="display-6">
                    Number of Servings {food.servings}
                </span>
            </div>
            <div>
                <span className="display-6">
                    Will be ready in {food.readyInMinutes} minutes
                </span>
            </div>
            <div>
                <span className="display-6">
                    {food.vegetarian ? "The food is Vegetarian" : ""}
                </span>
            </div>
            <div>
                <span className="display-6">
                    {food.vegan ? "The food is Vegan " : ""}
                </span>
            </div>
            <div className="mt-5">
                <span className="fw-bold display-6">Gradients</span>
                <div>
                    <ListItem food={food} isLoading={isLoading} />
                </div>
            </div>
            <div className="mt-5">
                <span className="fw-bold display-6">Instruction</span>
                <div className="mt-2">
                    <ol>
                        {isLoading
                            ? "loading..."
                            : food.analyzedInstructions[0].steps.map((step) => (
                                <li
                                    key={step.number}
                                    className="display-6 fw-bold"
                                >
                                    {step.step}
                                </li>
                            ))}
                    </ol>
                </div>
            </div>
        </div>
    );
}
