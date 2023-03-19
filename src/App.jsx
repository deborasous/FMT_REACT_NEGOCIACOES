import { Header } from "./components/Header";
import Form from "./components/Form";

export const App = () => {
  return (
    <div>
      <Header titulo="Negociações" />
      <div className="container">
        <Form />
      </div>
    </div>
  );
};
