import PropTypes from "prop-types";
import { TableRows } from "./TableRows";

//recebe  a variavel trades do App por props, desestruturando
export const Table = ({ trades }) => {
  function totalizer() {
    const valueTotal = trades.reduce((totalizer, trade) => {
      return totalizer + Number(trade.price) * Number(trade.amount);
    }, 0);

    return valueTotal.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  return (
    <div className="my-5">
      <table className="table table-hover table-bordered">
        <thead>
          <tr className="bg-info-subtle">
            <th className="fs-4">DATA</th>
            <th className="fs-4">QUANTIDADE</th>
            <th className="fs-4">VALOR</th>
            <th className="fs-4">VOLUME</th>
          </tr>
        </thead>
        <tbody>
          {trades.map((trade, index) => (
            <TableRows key={index} trade={trade} />
          ))}
        </tbody>
        <tfoot>
          <tr>
            {/* colSpan="3" faz com que uma celula pegue 3 coluna*/}
            <td colSpan="3"></td>
            {/* totalizer() está retornado a mutiplicação de price e de amount*/}
            <td className="fw-bold">{totalizer()}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

Table.propTypes = {
  trades: PropTypes.array.isRequired,
};
