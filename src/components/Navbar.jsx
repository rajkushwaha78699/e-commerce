function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <h2>🛍️ MyShop</h2>
      <div>🛒 Cart: {cartCount}</div>
    </nav>
  );
}

export default Navbar;
