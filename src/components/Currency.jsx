import React, { useState } from "react";
import "../css/Currency.css";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import axios from "axios";

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_2qaPIHYznxaN77TtAGfL2AWEXMdhQ0LInOKDp3GV";

const Currency = () => {
  const [amount, SetAmount] = useState(0);
  const [fromCurrency, SetFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [result, setResult] = useState(0);

  const exchange = async () => {
    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`
    );

    const result = (response.data.data[toCurrency] * amount).toFixed(2);
    setResult(result);
  };

  return (
    <div className="currency-div">
      <div className="container">
        <h3>valyuta mübadiləsi</h3>
      </div>
      <div className="cont">
        <input
          type="number"
          className="amount"
          value={amount}
          onChange={(e) => SetAmount(e.target.value)}
        />
        <select
          onChange={(e) => SetFromCurrency(e.target.value)}
          className="form-currency-option">
          <option>USD</option>
          <option>EUR</option>
          <option>TRY</option>
        </select>
        <FaRegArrowAltCircleRight
          style={{
            fontSize: "25px",
            marginRight: "10px",
            marginBottom: "-8px",
          }}
        />
        <select
          onChange={(e) => setToCurrency(e.target.value)}
          className="to-currency-option">
          <option>TRY</option>
          <option>USD</option>
          <option>EUR</option>
        </select>
        <input readOnly
          type="number"
          className="result"
          value={result}
          onChange={(e) => setResult(e.target.value)}
        />
      </div>
      <div className="btn-content">
        <button onClick={exchange}>Çevir</button>
      </div>
    </div>
  );
};

export default Currency;
