import { RouteBuilder } from "./containers/RouteBuilder";
import "./styles.css";
import { routes } from "./configs/routes";
export default function App() {
  return (
    <>
      <RouteBuilder routes={routes} />
    </>
  );
}
