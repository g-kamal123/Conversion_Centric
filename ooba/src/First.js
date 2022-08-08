import React from "react";

const First = () => {
  return (
    <div className="one">
      <img src="./logo.png" alt="" />
      <p style={{ fontWeight: "900" }}>
        Get a helping hand with your home loan
      </p>
      <div className="ff">
        <div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled.
            <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled
          </p>
        </div>
        <div
          style={{
            backgroundColor: "#67C040",
            padding: "1.5vw",
            margin: "1vw",
          }}
        >
          <div className="form">
            <p>
              <input type="text" placeholder="Title" />
            </p>
            <p>
              <input type="text" placeholder="First Name*" />
            </p>
            <p>
              <input type="text" placeholder="Last Name*" />
            </p>
            <p>
              <input type="text" placeholder="Email*" />
            </p>
            <p>
              <input type="text" placeholder="Phone Number*" />
            </p>
            <p>
              <input type="text" placeholder="Id Number*" />
            </p>
          </div>
          <p className="para">
            <div style={{ width: "100%" }}>
              Do you have a signed sales aggrement for a property
            </div>
            <div className="comp">
              <table>
                <tr>
                  <td>
                    <input type="radio" name="a" />
                  </td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>
                    <input type="radio" name="a" />
                  </td>
                  <td>No</td>
                </tr>
              </table>
            </div>
          </p>
          <button className="btn">PREQUALIFY ME</button>
        </div>
      </div>
      <img src="couple.svg" alt="" className="undraw"/>
    </div>
  );
};

export default First;
