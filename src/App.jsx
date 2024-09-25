import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodD from "./components/FoodDetails"

function App() {
    const [foodData, setFoodDate] = useState([]);
    const [foodId, setFoodId] = useState("658615");

    return (
        <div className="App">
            <Nav />
            <Search foodData={foodData} setFoodDate={setFoodDate} />
            <Container>
                <InnerContainer>
                    <FoodList foodData={foodData} setFoodId={setFoodId} />
                </InnerContainer>

                <InnerContainer>
                    <FoodD foodId={foodId} />
                </InnerContainer>
            </Container>
        </div>
    );
}

export default App;
