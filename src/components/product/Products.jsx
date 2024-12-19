export default function Products({products,cart,addToCart, removeFromCart}) {
return (
<div className="container">
      <div className="row">
        {
          products.data.map((element, index) => {
            const isInCart=cart.some((item)=>item.id===element.id);
            return <div className="col-md-4" key={`${element.id}-${index}`}>
              <div className="card">
                <img src={element.image} className="card-img-top" alt={element.name} />
                <div className="card-body">
                  <h5 className="card-title">{element.name}</h5>
                    <button type="button" className="btn btn-primary"
                     onClick={()=>
                      isInCart ? removeFromCart(element.id): addToCart(element) }> 
                  {isInCart ? "Remove Cart" :"Add Cart"}
                  </button>
                </div>
              </div>
            </div>

          })
        }
      </div>
    </div>
  )
}