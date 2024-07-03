import React, { useContext } from "react";
import { mycontext } from "../App";
import { MdDiscount } from "react-icons/md";
import { MdCurrencyRupee } from "react-icons/md";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { FaAppStoreIos } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import { PiPackageBold } from "react-icons/pi";

const Card = () => {
  const [Data, SetData] = useContext(mycontext);
  const totalPrice = Data.reduce(
    (preTotal, Data) => preTotal + Data.price * (Data.quantity || 1),
    0
  );
  const totalQuantity = Data.reduce(
    (preTotal, Data) => preTotal + (Data.quantity || 1),
    0
  );

  const handleInc = (id, quantity) => {
    SetData((curr) => {
      return curr.map((element) => {
        if (element.id === id) {
          return { ...element, quantity: element.quantity + 1 || quantity + 1 };
        }
        return element;
      });
    });
  };
  const handleDec = (id, quantity) => {
    SetData((curr) => {
      return curr.map((element) => {
        if (element.id === id && quantity > 0) {
          return { ...element, quantity: element.quantity - 1 || quantity - 1 };
        }
        return element;
      });
    });
  };
  const handleRemove = (id) => {
    SetData((curr) => curr.filter((element) => element.id !== id));
  };
  return (
    <div>
      <div className="container mt-5">
        <h1 className="text-center" >
          <b>
            <span className="cart">
              ...
            <MdOutlineDoubleArrow />
            
            <i >< FaAppStoreIos/>Shopping Cart !!</i>
            <MdOutlineDoubleArrow />...</span>
          </b>
        </h1>
        <hr />
        <h1 className="text-center">
          <span className="icons">
            <MdDiscount />
            <b className="Dis">50% Off - Smartphones / Smartphones & Basic ...</b>
          </span>
        </h1>
        <h1 className="text-center">
          <span className="icon">
          <i className="box"><PiPackageBold /></i>
            <b className="free"><i>Free Shipping</i></b>
             ...<FaShippingFast />
          </span>
        </h1>
        <hr />
        <br />
        <div className="d-flex justify-content-between mb-3 one">
          <h3 style={{color:"rgb(35,142,142)"}}>Total Quantity:{totalQuantity}</h3>
          <h3 style={{color:"rgb(102,149,32)"}}>Total Price:<MdCurrencyRupee />{totalPrice}</h3>
        </div>
        {Data.map((element, index) => {
          return (
            <div
              key={index}
              className="card mb-3  justify-content-center"
              style={{ maxWidth: "1000px" }}
            >
              <div className="row g-0">
                <div className="col-md-4 ">
                  <img
                    src={element.images}
                    className="rounded float-start"
                    alt="..."
                    style={{
                      width: "300px",
                      padding: "30px",
                      margin: "30px",
                      paddingTop: "70px",
                    }}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h2 className="card-title" style={{textDecoration:"underline"}}>{element.title}</h2><br/>
                    <h5 className="card-text">
                      Discription:{element.description}
                    </h5><br/>
                    <h5 className="card-text">Price:<MdCurrencyRupee />{element.price}</h5><br/>
                    <h5 className="card-text">
                      Discount:{element.discountPercentage}%
                    </h5><br/>
                    <h5 className="card-text">
                      Rating:
                      <span
                        class="badge text-bg-success"
                        style={{ height: "30px", width: "60px" }}
                      >
                        {element.rating}
                      </span>
                    </h5><br/>
                    <h5 className="card-text">Stock:{element.stock}</h5><br/>
                    <h5 className="card-text">Brand:<b>{element.brand}</b></h5>
                    <div className="d-flex align-items-center justify-content-end">
                      <button
                        className="btn btn-primary me-2"
                        onClick={() =>
                          handleDec(element.id, element.quantity || 1)
                        }
                      >
                        -
                      </button>
                      <div><b>{element.quantity || 1}</b></div>
                      <button
                        className="btn btn-primary ms-2"
                        onClick={() =>
                          handleInc(element.id, element.quantity || 1)
                        }
                      >
                        +
                      </button>
                    </div>
                    <br />
                    <div className="d-flex align-items-center justify-content-end">
                      <button
                        className="btn btn-danger ms-auto"
                        onClick={() => handleRemove(element.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
