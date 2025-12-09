function WishList(props){
return(
    <>
      {props.wish.length>0 && props.wish.map((e)=>
      <div key={e.id}>
        <img src={e.img} alt="Watch Image"/>
        <p>{e.name}</p>
      </div>
      )}
    </>
  )
}

export default WishList;