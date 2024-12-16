import './App.css'
import Balance from "./components/Balance.tsx";
import Operation from "./components/Operation.tsx";

function App() {

    return (
        <div className={'min-h-screen'}>
            <Balance/>
            <Operation/>
        </div>
    )
}

export default App
