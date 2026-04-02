
const CartItem = ({ item, updateQuantity, removeFromCart }) => {
  return (
    <div className="flex items-center justify-between p-6 border-b border-gray-100">
      
      <div>
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-gray-500">${item.price}</p>
      </div>

      <div className="flex items-center gap-3">

        <button
          onClick={() => updateQuantity(item._id, item.quantity - 1)}
          className="px-3 py-1 bg-gray-200 rounded">
          -
        </button>

        <span className="font-medium">{item.quantity}</span>

        <button
          onClick={() => updateQuantity(item._id, item.quantity + 1)}
          className="px-3 py-1 bg-gray-200 rounded" >
          +
        </button>

      </div>

      <div className="flex items-center gap-4">

        <span className="font-bold">
          ${(item.price * item.quantity).toFixed(2)}
        </span>

        <button
          onClick={() => removeFromCart(item._id)}
          className="text-red-500"  >
          Remove
        </button>

      </div>

    </div>
  )
}

export default CartItem