import './App.css';
import StateContextProvider from './contexts/StateContext';
import MainContainer from './screens/MainContainer';

function App() {
  return (
    <StateContextProvider>
      <MainContainer />
    </StateContextProvider>
  );
}

export default App;
