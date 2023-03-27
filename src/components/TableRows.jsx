import React from "react";
import PropTypes from "prop-types";

function emReais(price) {
  return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
export const TableRows = ({ trade }) => {
  const { date, amount, price } = trade;

  return (
    <>
      <tr>
        <td>{date}</td>
        <td>{parseFloat(amount)}</td>
        <td>{emReais(price)}</td>
        <td>{emReais(Number(price) * Number(amount))}</td>
      </tr>
    </>
  );
};

TableRows.propTypes = {
  //shape corresponde a um objeto que contem data, quantidade e valor
  trade: PropTypes.shape({
    date: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
