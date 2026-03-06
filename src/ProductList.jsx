function ProductList() {

  const plants = [
    {id:1, name:"Aloe Vera", price:10, category:"Succulents"},
    {id:2, name:"Snake Plant", price:15, category:"Indoor"},
    {id:3, name:"Peace Lily", price:18, category:"Indoor"},
    {id:4, name:"Rose", price:12, category:"Outdoor"},
    {id:5, name:"Cactus", price:8, category:"Succulents"},
    {id:6, name:"Tulip", price:14, category:"Outdoor"}
  ];

  return (
    <div>
      <h2>Plant List</h2>

      {plants.map((plant) => (
        <div key={plant.id}>
          <h3>{plant.name}</h3>
          <p>${plant.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}

    </div>
  );
}

export default ProductList;