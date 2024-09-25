import { useEffect, useState } from "react";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_Key = import.meta.env.VITE_API_KEY;

export default function Search({ foodDate, setFoodDate }) {
    const [query, setQuery] = useState("pizza");
    useEffect(() => {
        async function FetchFood() {
            const res = await fetch(`${URL}?query=${query}&apiKey=${API_Key}`);
            const data = await res.json();
            setFoodDate(data.results);
        }
        FetchFood();
    }, [query]);

    return (
        <div className="text-center m-1 p-5">
            <input
                className="rounded-5 px-3 display-4 bg-warning-subtle shadow"
                type="text"
                onChange={(e) => setQuery(e.target.value)}
                value={query}
            />
        </div>
    );
}
