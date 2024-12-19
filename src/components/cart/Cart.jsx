export default function Cart({cart, removeFromCart }){
    return (
        <>
        <div className="container">
            <h1>Shopping cart</h1>
            {
            cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="list-group">
          {cart.map((item) => (
            <li className="list-group-item d-flex justify-content-between" key={item.id}>
              {item.name}
              <button
                className="btn btn-danger btn-sm"
                onClick={() => removeFromCart(item)}
              >
                Remove
              </button>
            </li>
          ))
          }
        </ul>
      )}
    </div>
        </>
    )
}