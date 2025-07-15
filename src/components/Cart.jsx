function Cart({ cartItems }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h3>🛒 Cart Items</h3>
      {cartItems.length === 0 ? <p>No items yet.</p> :
        <ul>
          {cartItems.map((item, i) => (
            <li key={i}>{item.name} - ₹{item.price}</li>
          ))}
        </ul>
      }
      <h4>Total: ₹{total}</h4>
    </div>
  );
}

export default Cart;
