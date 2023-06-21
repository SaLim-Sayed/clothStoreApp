import React, { useContext, useState } from "react";
import imag1 from "./../../img/shirt/imag1.jpg";
import imag2 from "./../../img/shirt/imag2.jpg";
import imag3 from "./../../img/shirt/imag3.jpg";
import imag4 from "./../../img/shirt/imag4.jpg";
import imag5 from "./../../img/shirt/imag5.jpg";
import imag6 from "./../../img/shirt/imag6.jpg";

import pant1 from "./../../img/pantalon/pant1.jpg";
import pant2 from "./../../img/pantalon/pant2.jpg";
import pant3 from "./../../img/pantalon/pant3.jpg";
import pant4 from "./../../img/pantalon/pant4.jpg";
import pant5 from "./../../img/pantalon/pant5.jpg";
import pant6 from "./../../img/pantalon/pant6.jpg";

import shoes1 from "./../../img/shoes/shoes1.jpg";
import shoes2 from "./../../img/shoes/shoes2.jpg";
import shoes3 from "./../../img/shoes/shoes3.jpg";
import shoes4 from "./../../img/shoes/shoes4.jpg";
import shoes5 from "./../../img/shoes/shoes5.jpg";
import shoes6 from "./../../img/shoes/shoes6.jpg";

import sun1 from "./../../img/sunglasses/sun1.jpg";
import sun2 from "./../../img/sunglasses/sun2.jpg";
import sun3 from "./../../img/sunglasses/sun3.jpg";
import sun4 from "./../../img/sunglasses/sun4.jpg";
import sun5 from "./../../img/sunglasses/sun5.jpg";
import sun6 from "./../../img/sunglasses/sun6.jpg";

import suit1 from "./../../img/suit/suit1.jpg";
import suit2 from "./../../img/suit/suit2.jpg";
import suit3 from "./../../img/suit/suit3.jpg";

import { Count } from "../CountContext";

export default function _Cards() {
  const { increaseCount } = useContext(Count);
  const data = {
    all: [
      {
        id: 111,
        type: "Suits",
        title: "suit 1",
        image: suit1,
        salary: "  price is 289.96E£",
      },
      {
        id: 112,
        type: "Suits",
        title: "suit 2",
        image: suit2,
        salary: "  price is 289.96E£",
      },
      {
        id: 113,
        type: "Suits",
        title: "suit 3",
        image: suit3,
        salary: "  price is 289.96E£",
      },

      {
        id: 1,
        type: "T-Shirt",
        title: "T-Shirt1",
        image: imag1,
        salary: "  price is 300 $",
        size: "400px",
      },
      {
        id: 2,
        type: "T-Shirt",
        title: "T-Shirt 2",
        image: imag2,
        salary: "  price is 300 $",
        size: "400px",
      },
      {
        id: 3,
        type: "T-Shirt",
        title: "T-Shirt 3",
        image: imag3,
        salary: "  price is 300 $",
        size: "400px",
      },
      {
        id: 4,
        type: "T-Shirt",
        title: "T-Shirt 4",
        image: imag4,
        salary: "  price is 300 $",
        size: "400px",
      },
      {
        id: 5,
        type: "T-Shirt",
        title: "T-Shirt 5",
        image: imag5,
        salary: "  price is 300 $",
        size: "400px",
      },
      {
        id: 6,
        type: "T-Shirt",
        title: "T-Shirt 6",
        image: imag6,
        salary: "  price is 300 $",
        size: "400px",
      },

      {
        id: 7,
        type: "ShirT",
        title: "ShirT 1",
        image: pant1,
        salary: "  price is 300 $",
        size: "465x",
      },
      {
        id: 8,
        type: "ShirT",
        title: "ShirT 2",
        image: pant2,
        salary: "  price is 300 $",
        size: "465x",
      },
      {
        id: 9,
        type: "ShirT",
        title: "ShirT 3",
        image: pant3,
        salary: "  price is 300 $",
        size: "465x",
      },
      {
        id: 10,
        type: "ShirT",
        title: "ShirT 4",
        image: pant4,
        salary: "  price is 300 $",
        size: "465x",
      },
      {
        id: 11,
        type: "ShirT",
        title: "ShirT 5",
        image: pant5,
        salary: "  price is 300 $",
        size: "465x",
      },
      {
        id: 12,
        type: "ShirT",
        title: "ShirT 6",
        image: pant6,
        salary: "  price is 300 $",
        size: "465x",
      },

      {
        id: 13,
        type: "shoes",
        title: "shoes",
        image: shoes1,
        salary: "  price is 300 $",
        size: "300px",
      },
      {
        id: 14,
        type: "shoes",
        title: "shoes",
        image: shoes2,
        salary: "  price is 300 $",
        size: "300px",
      },
      {
        id: 15,
        type: "shoes",
        title: "shoes",
        image: shoes3,
        salary: "  price is 300 $",
        size: "300px",
      },
      {
        id: 16,
        type: "shoes",
        title: "shoes",
        image: shoes4,
        salary: "  price is 300 $",
        size: "300px",
      },
      {
        id: 17,
        type: "shoes",
        title: "shoes",
        image: shoes5,
        salary: "  price is 300 $",
        size: "300px",
      },
      {
        id: 18,
        type: "shoes",
        title: "shoes5",
        image: shoes6,
        salary: "  price is 300 $",
        size: "300px",
      },

      {
        id: 19,
        type: "sunglasses",
        title: "Sunglasses1",
        image: sun1,
        salary: "  price is 300 $",
        size: "200px",
      },
      {
        id: 20,
        type: "sunglasses",
        title: "Sunglasses2",
        image: sun2,
        salary: "  price is 300 $",
        size: "200px",
      },
      {
        id: 21,
        type: "sunglasses",
        title: "Sunglasses3",
        image: sun3,
        salary: "  price is 300 $",
        size: "200px",
      },
      {
        id: 22,
        type: "sunglasses",
        title: "Sunglasses4",
        image: sun4,
        salary: "  price is 300 $",
        size: "200px",
      },
      {
        id: 23,
        type: "sunglasses",
        title: "Sunglasses5",
        image: sun5,
        salary: "  price is 300 $",
        size: "200px",
      },
      {
        id: 24,
        type: "sunglasses",
        title: "Sunglasses6",
        image: sun6,
        salary: "  price is 300 $",
        size: "200px",
        theme: "red",
      },
    ],
  };

  const [Data, setData] = useState(data);

  const filterData = (filterDataElement) => {
    var element = {},
      all = [];
    if (filterDataElement === "all") {
      all = data.all;
    } else {
      data.all.filter((value) => {
        if (value.type === filterDataElement) {
          element = value;
          all.push(element);
        }
      });
    }
    setData({ all });
  };

  return (
    <div>
      <div className="container products ">
        <h1 className="text-light my-2" style={{ backgroundColor: "" }}>
          <em>Products</em>
        </h1>
        <div
          className="control-buttons my-2 "
          style={{ backgroundColor: "#355577" }}
        >
          <button
            type="button"
            className="btn   btn-info text-dark mx-1"
            onClick={() => {
              filterData("all");
            }}
          >
            All
          </button>
          <button
            type="button"
            className="btn mx-3    mx-1"
            style={{ color: "#b0e8e0" }}
            onClick={() => {
              filterData("Suits");
            }}
          >
            Suits
          </button>
          <button
            type="button"
            className="btn  mx-3   mx-1"
            style={{ color: "#b0e8e0" }}
            onClick={() => {
              filterData("ShirT");
            }}
          >
            ShirT
          </button>
          <button
            type="button"
            className="btn mx-3    mx-1"
            style={{ color: "#b0e8e0" }}
            onClick={() => {
              filterData("T-Shirt");
            }}
          >
            T-Shirt
          </button>
          <button
            type="button"
            className="btn mx-3    mx-1"
            style={{ color: "#b0e8e0" }}
            onClick={() => {
              filterData("shoes");
            }}
          >
            shoes
          </button>
          <button
            type="button"
            className="btn mx-3   mx-1"
            style={{ color: "#b0e8e0" }}
            onClick={() => {
              filterData("sunglasses");
            }}
          >
            sunglasses
          </button>
        </div>
        <div className="row">
          {Data.all.map((value) => {
            return (
              <div
                className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-5"
                key={value.id}
              >
                <div
                  style={{ backgroundColor: "value.theme" /* '#d8b6b6' */ }}
                  className="card"
                >
                  <img
                    style={{ height: "value.size" }}
                    className="card-img-top"
                    src={value.image}
                    height={value.size}
                    alt="Card image cap"
                  />
                  <div className="card-body bg-info">
                    <h5
                      className="card-title text-center w-100"
                      style={{ color: "#EFEFEF" }}
                    >
                      {value.title}
                    </h5>
                    <p
                      className=" text-center card-text"
                      style={{ backgroundColor: "#36618e", color: "white" }}
                    >
                      <a style={{ color: "white" }} href="#">
                        {value.salary}
                      </a>
                    </p>
                    <a
                      className="btn btn-primary w-100"
                      style={{ backgroundColor: "#2A4766", color: "white" }}
                      onClick={increaseCount}
                    >
                      Add To Card
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
