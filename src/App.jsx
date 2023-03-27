import { useState } from "react";
import { FormControl } from "./components/Form";
import { Header } from "./components/Header";
import { Table } from "./components/Table";

export const App = () => {
  //passa trades por props para o componente Table
  const [trades, setTrades] = useState([]);

  //passar addTrade por props no componente FormControl
  function addTrade(trade) {
    setTrades([...trades, trade]);
  }

  return (
    <div>
      <Header titulo="Negociações" />
      <div className="container">
        {/* passa a função addTrade para o componente FormControl */}
        <FormControl whenAdd={addTrade} />
        {/* passa a variavel trades para a Table por props desestruturando na Table */}
        <Table trades={trades} />
      </div>
    </div>
  );
};
