import "./Main.css"

function Cart(props){
  
  return(
    <>
      {props.cart.length>0 && props.cart.map((e)=>
      <div key={e.id}>
        <img src={e.img} alt="Watch Image"/>
        <p>{e.name}</p>
        <p>Count:{e.count}</p>
      </div>
      )}
    </>
  )
}

export default Cart;