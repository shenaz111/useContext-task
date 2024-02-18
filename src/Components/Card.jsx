import React, { useContext, useState } from "react";
import { dataContext } from "../App";

function Card() {
  const { data } = useContext(dataContext);
  const [price, setprice] = useState(0);
  const [count, setcount] = useState(0);
  const discount = 10;

  //console.log(count);
  const total = (e) => {
    setcount ( e.target.value);
    setprice(e.target.value * data.price);
  };
  const remove = () => {
    setprice(0);
    setcount(0);
  };

  return (
    <div className="col px-5 backgroundClr pt-5">
      <div className=" ">
        <div className="row ">
          <div className="col-lg-3 col-12 text-center mb-2">
            <img src={data.thumbnail} className="img-fluid " alt="..." />
          </div>
          <div className="col-lg-6 col-6">
            <div className="  ">
              <h2>{data.title}</h2>
              <p>
                <b>Description</b>
              </p>
              <p className="text-secondary">{data.description}</p>
              <p>
                <b>Rating : </b>
                {data.rating}
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-6 ">
            <div className=" text-end ">
              <div className="d-flex justify-content-end align-items-center m-2 text-end ">
                <div className="wrapper">
                  <select
                    name=""
                    size={1}
                    id="select"
                    className="SelectTag "
                    onChange={(e) => {
                      total(e);
                    }}
                    value={count}>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
                <h6 className="pt-2">
                  <i className="bi bi-currency-dollar"></i>
                  {data.price.toFixed(2)}
                </h6>
              </div>
              <button className="mt-5 RemoveButton" onClick={remove}>
                REMOVE
              </button>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="my-4">
        <div className="d-flex justify-content-between">
          <h5 className="text-secondary">TOTAL :</h5>
          <h6>
            <i className="bi bi-currency-dollar"></i>
            {price.toFixed(2)}
          </h6>
        </div>
        <div className="d-flex justify-content-between">
          <h5 className="text-secondary h6">SHIPPING :</h5>
          <h6>FREE</h6>
        </div>
        <div className="d-flex justify-content-between">
          <h5 className="text-secondary h6">DISCOUNT :</h5>
          <h6>{discount}%</h6>
        </div>
      </div>

      <hr />

      <div className="my-4">
        <div className="d-flex justify-content-between">
          <h5>SUBTOTAL :</h5>
          <h6>
            <i className="bi bi-currency-dollar"></i>
            {((price * (100 - discount)) / 100).toFixed(2)}
          </h6>
        </div>
        <div className="text-end">
          <p className="text-danger">Get Daily Cash With NespolaCard</p>
        </div>
      </div>
    </div>
  );
}

export default Card;