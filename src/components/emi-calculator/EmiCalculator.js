import React, { useState } from "react";
import "./EmiCalculator.css";
import rightTick from "../media/right-tick.png";

function EmiCalculator() {
  const [emi, setEmi] = useState({
    amount: "",
    tenure: "",
    interest: "",
  });
  const [monthlyEmi, setMonthlyEmi] = useState("20,000");
  const [totalPaybleAmount, setTotalPaybleAmount] = useState("80,00,000");
  const numPattern = /^(?=.*[1-9]|0)\d*(\.\d+)?$/;

  const [isError, setIsError] = useState(false);

  const checkValidNum = (e) => {
    if (numPattern.test(e.target.value)) {
      // console.log("yes, go ahead.");
      setIsError(false);
    } else {
      setIsError(true);
      // console.log("please enter the correct value");
    }
  };

  const inputChangeHandler = (e) => {
    let { name, value } = e.target;
    if (name === "interest") {
      value = value.replace("%", "");
      if (!isNaN(value)) {
        value = value + "%";
      }
    }

    if (name === "amount") {
      value = value.replace(/[^0-9]/g, "");
      value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      if (!value.startsWith("₹")) {
        value = `₹ ${value}`;
      }
    }
    setEmi({ ...emi, [name]: value });
  };

  const calculateEmihandler = (e) => {
    e.preventDefault();
    const numericValueRate = parseFloat(emi.interest.replace("%", ""));
    const RATE = numericValueRate / 1200;
    const TENURE = emi.tenure * 12;
    const numericValueAmount = parseFloat(emi.amount.replace(/[^0-9.-]+/g, ""));
    const emiValue =
      (numericValueAmount * RATE * Math.pow(1 + RATE, TENURE)) /
      (Math.pow(1 + RATE, TENURE) - 1);
    const formattedEmi = emiValue.toLocaleString();
    setMonthlyEmi(formattedEmi);
    const totalAmount = emiValue * TENURE;
    const formattedTotalAmount = totalAmount.toLocaleString();
    setTotalPaybleAmount(formattedTotalAmount);
  };

  return (
    <div className="container">
      <div className="emi_container">
        <div className="row">
          <h3 className="text-center">EMI Calculator</h3>
          <form onSubmit={calculateEmihandler}>
            <div className="row calculator_top_row">
              <div className="mt20 col-md-3">
                <label htmlFor="loanamount" className="form-label">
                  Loan Amount (Rs.)*
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
                {/* {isError && (
                  <p className="error_message">Please enter the valid input.</p>
                )} */}
              </div>
              <div className="mt20 col-6 col-md-3">
                <label htmlFor="loantenure" className="form-label">
                  Loan Tenure (Year)*
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
                {/* {isError && (
                  <p className="error_message">Please enter the valid input.</p>
                )} */}
              </div>
              <div className="mt20 col-6 col-md-3">
                <label htmlFor="loanrate" className="form-label">
                  Interest Rate % (p.a)*
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
                {/* {isError && (
                  <p className="error_message">Please enter the valid input.</p>
                )} */}
              </div>
              <div className="mt20 col-md-3">
                <button className="modal_form_btn" type="submit">
                  Calculate
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="row calculator_middle_row">
          <div className="col-md-6">
            <div className="row">
              <div className="col-6">
                <h5>EMI Amount</h5>
                <p className="emi_amount">₹ {monthlyEmi}</p>
              </div>
              <div className="col-6">
                <h5>Total Payble Amount</h5>
                <p className="emi_amount">
                  ₹ {totalPaybleAmount.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mob_hide">
            <div className="row">
              <div className="col-12">
                <h5>Why Propularity?</h5>
              </div>
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
        <div className="row calculator_bottom_row">
          <div className="bank_logo">
            <img
              src="https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1695800689477.png"
              alt="sbi bank"
              className="img-fluid"
            />
          </div>
          <div className="bank_logo">
            <img
              src="https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1695800681376.png"
              alt="icici bank"
              className="img-fluid"
            />
          </div>
          <div className="bank_logo">
            <img
              src="https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1696406120759.png"
              alt="HDFC bank"
              className="img-fluid"
            />
          </div>
          <div className="bank_logo">
            <img
              src="https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1695800653737.png"
              alt="axis bank"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmiCalculator;