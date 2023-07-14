import React from "react";
import { BsFillCartCheckFill } from "react-icons/bs";
import { BiErrorCircle } from "react-icons/bi";
import { useParams } from "react-router-dom";
import "./Payment.scss";
import { resetCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

function Payment() {
  const dispatch = useDispatch();
  const params = useParams();
  const status = params.status;

  const infoData = {
    success: {
      message: "Your order has been placed",
      cta: "Shop More",
      icon: <BsFillCartCheckFill />,
    },
    failed: {
      message: "Payment Failed",
      cta: "Try again",
      icon: <BiErrorCircle />,
    },
  };

  if ((status === 'success')) {
    dispatch(resetCart());
  }

  return (
    <div className="Payments">
      <div className="icon">{infoData[status].icon}</div>
      <h2 className="message">{infoData[status].message}</h2>
      <button className="btn-primary">{infoData[status].cta}</button>
    </div>
  );
}

export default Payment;
