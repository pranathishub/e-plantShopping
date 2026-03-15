import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

const plants = {
  Indoor: [
    { id: 1, name: "Snake Plant", price: 10, image: "plant1.jpg" },
    { id: 2, name: "Peace Lily", price: 12, image: "plant2.jpg" },
    { id: 3, name: "Spider Plant", price: 8, image: "plant3.jpg" },
    { id: 4, name: "Rubber Plant", price: 15, image: "plant4.jpg" },
    { id: 5, name: "ZZ Plant", price: 18, image: "plant5.jpg" },
    { id: 6, name: "Pothos", price: 9, image: "plant6.jpg" }
  ],

  Outdoor: [
    { id: 7, name: "Rose", price: 20, image: "plant7.jpg" },
    { id: 8, name: "Lavender", price: 14, image: "plant8.jpg" },
    { id: 9, name: "Tulip", price: 11, image: "plant9.jpg" },
    { id: 10, name: "Sunflower", price: 13, image: "plant10.jpg" },
    { id: 11, name: "Jasmine", price: 16, image: "plant11.jpg" },
    { id: 12, name: "Hibiscus", price: 17, image: "plant12.jpg" }
  ]
};

function ProductList() {

  const dispatch = useDispatch();

  const handleAdd = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div>

      {Object.keys(plants).map((category) => (
        <div key={category}>
          <h2>{category}</h2>

          <div>
            {plants[category].map((plant) => (
              <div key={plant.id}>

                <img src={plant.image} alt={plant.name} width="100"/>

                <h3>{plant.name}</h3>

                <p>${plant.price}</p>

                <button onClick={() => handleAdd(plant)}>
                  Add to Cart
                </button>

              </div>
            ))}
          </div>

        </div>
      ))}

    </div>
  );
}

export default ProductList;
