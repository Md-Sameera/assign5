import './App.css';
// import Hof from './folder/Hof';
import Pfc from './folder/Pfc';
import Rcc from './folder/Rcc';

function App() {
  return (
    <>
      <div><Pfc name="RPFC" /></div>
      <div><Rcc name="RPCC"/></div>
    <div>
      <p>A higher-order component is a function that takes a component and returns a new component.</p>
      <p>The purpose of a HOC is to enhance a component (usually a dumb component) with extra functionality. </p>
      <p>A HOC allows for reusability since in real-life applications there is a need to re-use the same functionalities in various similar kinds of components. A very common functionality is toggling.</p>
      </div>
    </>
  );
}

export default App;
