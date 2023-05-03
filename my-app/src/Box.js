import React, { useState } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";

function Box() {
  
  const [fromCurrency, setFromCurrency] = useState("");
  const [TofromCurrency, setToFromCurrency] = useState("");
  const [List, SetList] = useState(false);
  const [ToList, SetToList] = useState(false);
  const [AmountValue, SetAmountValue] = useState("");
  const [Result, SetResult] = useState("");
  const [CurrencyeRate, SetCurrencyeRate] = useState("");
  function ListHandler() {
    SetList(!List);
  }
  function ToListHandler() {
    SetToList(!ToList);
  }

  function handleCurrencyClick(currency) {
    setFromCurrency(currency);
    SetList(false);
  }
  function handleToCurrencyClick(currency) {
    setToFromCurrency(currency);
    SetToList(false);
  }
  function handleSwapClick() {
    const temp = fromCurrency;
    setFromCurrency(TofromCurrency);
    setToFromCurrency(fromCurrency);
  }
  function AmountChangeHandler(event) {
    SetAmountValue(event.target.value);
  }
  function ResultChangeHandler(event) {
    SetResult(event.target.value);
  }
 
  function ConvertHandler() {
    {
      /*USD->IQD*/
    }
    if (fromCurrency === "USD" && TofromCurrency === "IQD") {
      SetResult(AmountValue * 1430.825);
      SetCurrencyeRate("1USD=1459 IQD  ");
    }
    if (fromCurrency === "IQD" && TofromCurrency === "USD") {
      SetResult(AmountValue / 1.43);
      SetCurrencyeRate(" 1 IQD = 0.000685199 USD");
    }
    {
      /*USD->IQD*/
    }
    {
      /*Eur->IQD*/
    }

    if (fromCurrency === "EUR" && TofromCurrency === "IQD") {
      SetResult(AmountValue * 1573.649);
      SetCurrencyeRate(" 1 EUR = 1.606.23 IQD");
    }
    if (fromCurrency === "IQD" && TofromCurrency === "EUR") {
      SetResult(AmountValue / 1.57);
      SetCurrencyeRate(" 1 IQD = 0.000622577 EUR");
    }
    {
      /*Eur->IQD*/
    }
    if (fromCurrency === "EUR" && TofromCurrency === "USD") {
      SetResult(AmountValue * 1.09986);
      SetCurrencyeRate(" 1EUR = 1.10031 USD ");
    }
    if (fromCurrency === "USD" && TofromCurrency === "EUR") {
      SetResult(AmountValue / 1.09986);
      SetCurrencyeRate(" 1USD= 0.908834 EUR ");
    }
  }
  return (
    <div className="Box">
      <CurrencyExchangeIcon className="CurrencyIcon" />
      <div className="Inputs">
        <div className="Amount">
          <p>Amount</p>
          <input value={AmountValue} onChange={AmountChangeHandler} />
        </div>
        <div className="From">
          <p>From</p>
          <input value={fromCurrency} />
          <ArrowDownwardIcon onClick={ListHandler} className="DownIcon" />
        </div>
        <SwapHorizIcon onClick={handleSwapClick} className="SwapIcon" />
        <div className="To">
          <p>To</p>
          <input value={TofromCurrency} />
          <ArrowDownwardIcon onClick={ToListHandler} className="ToDownIcon" />
        </div>
      </div>
      {/*From- Currencyes lists */}
      <div className={List ? "CurrencyesDisplayed" : "Currencyes"}>
        <div className="USA" onClick={() => handleCurrencyClick("USD")}>
          <img src="./usa.jpg" />
          <p>USA-US Dollar</p>
        </div>
        <div className="EU" onClick={() => handleCurrencyClick("EUR")}>
          <img src="./EU.jpg" />
          <p>EUR-Euro</p>
        </div>
        <div className="IQD" onClick={() => handleCurrencyClick("IQD")}>
          <img src="./iraq.webp" />
          <p>IQD-Iraqi Dinnarr</p>
        </div>
      </div>
      {/* From- Currencyes lists */}
      {/* To- Currencyes lists */}
      <div className={ToList ? "ToCurrencyesDisplayed" : "ToCurrencyes"}>
        <div className="USA" onClick={() => handleToCurrencyClick("USD")}>
          <img src="./usa.jpg" />
          <p>USA-US Dollar</p>
        </div>
        <div className="EU" onClick={() => handleToCurrencyClick("EUR")}>
          <img src="./EU.jpg" />
          <p>EUR-Euro</p>
        </div>
        <div className="IQD" onClick={() => handleToCurrencyClick("IQD")}>
          <img src="./iraq.webp" />
          <p>IQD-Iraqi Dinnar</p>
        </div>
      </div>
      {/* To-Currencyes lists */}
      <button onClick={ConvertHandler}>Convert</button>
      <input
        className="ResultInput"
        value={Result}
        onChange={ResultChangeHandler}
      />
      <h2>{Result}</h2>
      <h5>{CurrencyeRate}</h5>
    </div>
  );
}

export default Box;
