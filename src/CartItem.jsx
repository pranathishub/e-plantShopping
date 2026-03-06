function CartItem({item}) {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>Price: ${item.price}</p>

      <button>-</button>
      <span>1</span>
      <button>+</button>

      <button>Delete</button>
    </div>
  );
}

export default CartItem;