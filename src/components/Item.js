import { useState } from "react";
import "../App.css";
import bottle from "../images/wine_bottle.png";

function Item(props) {
  const [case_quantity, setCaseQuantity] = useState(0);
  const [bottle_quantity, setBottleQuantity] = useState(0);
  return (
    <div className="item">
      <img className="thumbnail" src={bottle} />
      <div>
        <span className="item_name">{props.name}</span>
        <div className="item_details_container">
          <div className="left_single_item">
            <div className="price_container">
              <span className="bottle_text">Bottle</span>
              <span className="price_text">{props.bottle_cost}</span>
            </div>
            <div className="input_container">
              <input  type="number" className="qty_input" min="1" max="100" onChange={(event)=>{
                setBottleQuantity(event.target.value)
              }}/>
              <label className="qty_label">QTY</label>
            </div>
            <button  onClick = {props.showDetails} className="light_btn">Details</button>
          </div>

          <div className="right_single_item">
            <div className="price_container">
              <span className="bottle_text">Case</span>
              <span className="price_text">{props.case_cost}</span>
            </div>
            <div className="input_container">
              <input type="number" className="qty_input" min="1" max="100" onChange={(event)=>{
                setCaseQuantity(event.target.value)
              }}/>
              <label className="qty_label">QTY</label>
            </div>
            <button onClick = {()=>{
              props.addItem(case_quantity,bottle_quantity)
            }} className="dark_btn">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
