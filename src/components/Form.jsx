import PropTypes from "prop-types";
import React, { useState } from "react";
import GroupInput from "./GroupInput";
import { format, parseISO } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";

export const FormControl = (props) => {
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState(0);
  const [price, setPrice] = useState(0);

  function handleAddTrade() {
    if (date != "" && amount != "" && price != "") {
      const trade = {
        date: format(parseISO(date), "dd-MM-yyyy", new Date(), {
          locale: ptBr,
        }),
        amount: amount,
        price: price,
      };

      setDate("");
      setAmount(0);
      setPrice(0);
      // passa o obj trade por props para o whenTrade
      props.whenAdd(trade);
    } else {
      alert("preencha todos os campos");
    }
  }

  return (
    <form className="form container row justify-content-around">
      <div className="form-group col">
        <GroupInput
          id="data"
          htmlFor="data"
          label="Data"
          type="date"
          modify={(e) => setDate(e.target.value)}
          valor={date}
        />
      </div>
      <div className="form-group col">
        <GroupInput
          htmlFor="quantidade"
          label="Quantidade"
          id="quantidade"
          type="number"
          min={1}
          step={1}
          modify={(e) => setAmount(e.target.value)}
          valor={amount}
        />
      </div>
      <div className="form-group col">
        <GroupInput
          htmlFor="valor"
          label="Valor"
          id="valor"
          type="number"
          min={0.01}
          step={0.01}
          modify={(e) => setPrice(e.target.value)}
          valor={price}
        />
      </div>
      <div className="col-1 d-flex align-items-end">
        <button
          className="btn btn-primary px-3 py-2"
          type="button"
          onClick={handleAddTrade}
        >
          Incluir
        </button>
      </div>
    </form>
  );
};

FormControl.propTypes = {
  whenAdd: PropTypes.func.isRequired,
};
