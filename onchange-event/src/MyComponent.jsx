
import React,{useState} from "react";
function MyComponent() {
    const [name,setname] = useState("Guest");
    const [quantity,setQuantity] = useState();
    const [comment,setComment] = useState();
    const [payment,setPayment] = useState("");
    const [shipping,setShipping] = useState("Delivery");

    function handleNameChange(event) {
        setname(event.target.value)
    }
  function handleQuantityChange(event) {
        setQuantity(event.target.value)
    }

    function handleCommentChange(event) {
        setComment(event.target.value)
    }


    function handlePaymentChange(event) {
        setPayment(event.target.value);
    }


    function handleShippingChange(event) {
        setShipping(event.target.value);
    }
    return(
        <div>
            <input value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type={"number"}/>
            <p>Quantity: {quantity}</p>

            <input type="text" value={comment} onChange={handleCommentChange} placeholder={"Enter delivery instruction"}/>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select and option</option>
                <option value="visa">Visa</option>
                <option value="mastercard">Mastercard</option>
                <option value="giftcard">Giftcard</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value={"Pick Up"} checked={shipping === "Pick Up"} onChange={handleShippingChange}/>
                Pick Up
            </label>
            <label>
                <input type="radio" value={"Delivery"} checked={shipping === "Delivery"} onChange={handleShippingChange}/>
                Delivery
            </label>
            <p>Shipping: {shipping}</p>

        </div>
    )
}

export default MyComponent