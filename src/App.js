import DashboardComponent from "./components/landing-component/dashboard-component";
import { slambookQuestion } from "./mock-data";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className={`sb-view`}>
        <DashboardComponent />
      </div>
    </div>
  );
}
