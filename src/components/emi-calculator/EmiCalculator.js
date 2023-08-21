import React, { useState } from "react";
import "./EmiCalculator.css";
import rightTick from "../media/right-tick.png";

function EmiCalculator() {
  const [emi, setEmi] = useState({
    amount: "",
    tenure: "",
    interest: "",
  });
  const [monthlyEmi, setMonthlyEmi] = useState(20000);
  const [totalPaybleAmount, setTotalPaybleAmount] = useState(8000000);
  const numPattern = /^(?=.*[1-9]|0)\d*(\.\d+)?$/;

  const checkValidNum = (e) => {
    if (numPattern.test(e.target.value)) {
      console.log("yes, go ahead.");
    } else {
      console.log("please enter the correct value");
    }
  };
  const inputChangeHandler = (e) => {
    let { name, value } = e.target;
    setEmi({ ...emi, [name]: value });
  };

  const calculateEmihandler = (e) => {
    e.preventDefault();
    const RATE = emi.interest / 1200;
    const TENURE = emi.tenure * 12;
    const emiValue =
      (emi.amount * RATE * Math.pow(1 + RATE, TENURE)) /
      (Math.pow(1 + RATE, TENURE) - 1);
    setMonthlyEmi(emiValue.toFixed(2));
    setTotalPaybleAmount((emiValue * TENURE).toFixed(2));
    // setEmi({ amount: "", tenure: "", interest: "" });
  };

  //   Rs 10,00,000 * 0.006 * (1 + 0.006)120 / ((1 + 0.006)120 – 1) = Rs 11,714.

  return (
    <div className="container">
      <div className="emi_container">
        <div className="row">
          <div className="col-12 col-md-6">
            <h3 className="text-center">EMI Calculator</h3>
            <form onSubmit={calculateEmihandler}>
              <div className="mt20 col-12">
                <label htmlFor="loanamount" className="form-label">
                  Loan Amount
                </label>
                <input
                  type="text"
                  className="form-control my_input"
                  id="loanamount"
                  onBlur={checkValidNum}
                  name="amount"
                  value={emi.amount}
                  onChange={inputChangeHandler}
                  placeholder="₹ 50,00,000*"
                  required
                />
              </div>
              <div className="row">
                <div className="mt20 col-6">
                  <label htmlFor="loantenure" className="form-label">
                    Loan Tenure
                  </label>
                  <input
                    type="text"
                    className="form-control my_input"
                    id="loantenure"
                    onBlur={checkValidNum}
                    name="tenure"
                    value={emi.tenure}
                    onChange={inputChangeHandler}
                    placeholder="12*"
                    required
                  />
                </div>
                <div className="mt20 col-6">
                  <label htmlFor="loanrate" className="form-label">
                    Interest Rate % (p.a)
                  </label>
                  <input
                    type="text"
                    className="form-control my_input"
                    id="loanrate"
                    onBlur={checkValidNum}
                    name="interest"
                    value={emi.interest}
                    onChange={inputChangeHandler}
                    placeholder="12*"
                    required
                  />
                </div>
              </div>
              <button className="mt30 modal_form_btn" type="submit">
                Calculate
              </button>
            </form>
          </div>
          <div className="col-12 col-md-6">
            <div className="row">
              <div className="col-6">
                <h5>EMI Amount</h5>
                <p className="emi_amount">₹ {monthlyEmi.toLocaleString()}</p>
              </div>
              <div className="col-6">
                <h5>Total Payble Amount</h5>
                <p className="emi_amount">
                  ₹ {totalPaybleAmount.toLocaleString()}
                </p>
              </div>
            </div>
            <hr className="divider_line2" />
            <div className="row mt30">
              <h5>Why Propularity?</h5>
              <div className="col-4 d-flex mt20">
                <div className="right_tick_box">
                  <img src={rightTick} alt="right tick" />
                </div>
                <p className="emi_p">Loan Offers from 34+ Banks</p>
              </div>
              <div className="col-4 d-flex mt20">
                <div className="right_tick_box">
                  <img src={rightTick} alt="right tick" />
                </div>
                <p className="emi_p">Get Lowest Rate of Interest</p>
              </div>
              <div className="col-4 d-flex mt20">
                <div className="right_tick_box">
                  <img src={rightTick} alt="right tick" />
                </div>
                <p className="emi_p">Get Highest Loan Value</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmiCalculator;
