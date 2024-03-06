import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [quantity, setQuantity ] = useState(0);
  const [item , setItem] = useState([
        {  item: "Bread", quantity: 0, price:50},
        {  item: "Cheese", quantity: 0, price:20 },
        {  item: "Aloo", quantity: 0, price:60 },
   
  ]);

  const [price, setPrice] = useState(0);
  const [totalPrice, setTotalPrice] =  useState(0)
  const [modal, setModal] = useState(false);
  const [itemStack, setItemStack] = useState([]);
  

    let ingredients = {
      Bread: "==================",
      Cheese: "**********************",
      Aloo: "--------------------",
   
    };


      const handleQuantity = (operator) =>{
        const isQuantity = items.some(({isQuantity}) => quantity > 0);
        if(isQuantity){
          if(operator === 'inc'){
            setQuantity((prevQuan) => (prev += 1));

          }
          else{
   setQuantity(quantity === 0 ? 0 : quantity - 1);

          } }}


          // Icrement function
const handleInc = (name) => {
  const burgerItem = [...items];
  const index = burgerItem.findIndex((item) => item.item === name);
  burgerItems[index].quantity += 1;
  setItem(burgerItem);

    setItemStack((prevItem) => [name, ...prevItem] );

  const handleDec = (name) => {
  const burgerItem = [...items];
  const index = burgerItem.findIndex((item) => item.item === name);
  burgerItems[index].quantity = burgerItem[index].quantity ===0 ? 0 : (burgerItem[index].quantity -=1);
  setItem(burgerItem)
  setItem(burgerItem);

  const addPrice = items.reduce((acc, obj)=> {
    return acc + obj.quantity*obj.price;
  
  },0);
  setPrice(addPrice)
}
}
  return (
    <>
      <div className="App">
        {/* <h1 className="Header">BURGER MANIA</h1> */}
        <div className="burger-items">
          <div className="burger-item">
            <button className="item-buttons" onClick={() => handleInc("Bread")}>
              +
            </button>
            <div>Bread</div>
            <button className="item-buttons" onClick={() => handleDec("Bread")}>
              -
            </button>
          </div>
          {/* <div className="burger-item">
            <button
              className="item-buttons"
              onClick={() => handleInc("Paneer")}>
              +
            </button>
            <div>Paneer</div>
            <button
              className="item-buttons"
              onClick={() => handleDec("Paneer")}>
              -
            </button>
          </div> */}
          <div className="burger-item">
            <button
              className="item-buttons"
              onClick={() => handleInc("Cheese")}>
              +
            </button>
            <div>Cheese</div>
            <button
              className="item-buttons"
              onClick={() => handleDec("Cheese")}>
              -
            </button>
          </div>
          <div className="burger-item">
            <button className="item-buttons" onClick={() => handleInc("Aloo")}>
              +
            </button>
            <div>Aloo</div>
            <button className="item-buttons" onClick={() => handleDec("Aloo")}>
              -
            </button>
          </div>
          <div className="burger-item">
            <button
              className="item-buttons"
              onClick={() => handleQuantity("inc")}>
              +
            </button>
            <div>Quantity: {quantity}</div>
            <button
              className="item-buttons"
              onClick={() => handleQuantity("dec")}>
              -
            </button>
          </div>
        </div>


              {/* BURGER DISPLAY CONTAINER   */}
              <div className='burger-container'>
                  {ItemStack.map ((item) => (<div className={`burger-image ${item}`}>
                    <div>
                              {ingredients[item]}
                    </div>
                  </div>
                  ))}

                  <div className='price' >
                           Checkout Price : { totalPrice}
                  </div>
                  <div className='Place-order' onClick={() => {setModal(true)}}>
                            Order IT!
                  </div>
              </div>

      </div>
    </>
  );
}

export default App;
