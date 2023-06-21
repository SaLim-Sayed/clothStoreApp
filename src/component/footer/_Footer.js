import { Component } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { Nav } from 'react-bootstrap';

class _Footer extends Component {
  render() {
    return (
      <div className="home" style={{ background: "#05101c", width: "100%",textAlign:"center" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <ul
                style={{
                  listStyleType: "none",
                  fontSize: "20px",
                  lineHeight: "2.8",
                  color: "rgb(193 193 193)",
                  marginTop: "50px",
                }}
              >
                <li
                  style={{
                    color: "green",
                    border: "none",
                    marginBottom: "20px",
                  }}
                >
                  <h3>SaLim Shop</h3>
                </li>
                <li>
                  <Nav.Link className="text-info" to="#">
                    <FaMapMarkerAlt /> 23 Salim street at minia
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link className="text-info" to="#">
                    <FaPhone /> 08684254254
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link className="text-info" to="#">
                    <FaEnvelope /> salim@gmail.com
                  </Nav.Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-4">
              <ul
                style={{
                  listStyleType: "none",
                  fontSize: "20px",
                  lineHeight: "2.2",
                  color: "rgb(193 193 193)",
                  marginTop: "50px",
                }}
              >
                <li
                  style={{
                    color: "green",
                    border: "none",
                    marginBottom: "20px",
                  }}
                >
                  <h3>Products</h3>
                </li>

                <li>
                  <Nav.Link className="text-info" to="#">
                    Sport Wear
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link className="text-info" to="#">
                    Men's Shoes
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link className="text-info" to="#">
                    Women's Shoes
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link className="text-info" to="#">
                    Popular Dress
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link className="text-info" to="#">
                    Sport Shoes
                  </Nav.Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 ">
              <ul
                style={{
                  listStyleType: "none",
                  fontSize: "20px",
                  lineHeight: "2.2",
                  color: "rgb(193 193 193)",
                  marginTop: "50px",
                }}
              >
                <li
                  style={{
                    color: "green",
                    border: "none",
                    marginBottom: "20px",
                  }}
                >
                  <h3>Further Info</h3>
                </li>
                <li>
                  <Nav.Link className="text-info" to="#">
                    Home
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link className="text-info" to="#">
                    About Us
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link className="text-info" to="#">
                    Shop Locations
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link className="text-info" to="#">
                    FAQS
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link className="text-info" to="#">
                    Contact
                  </Nav.Link>
                </li>
              </ul>
            </div>
            <hr />

           
          </div>
        </div>
      </div>
    );
  }
}
export default _Footer;
