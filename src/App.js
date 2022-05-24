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
    <b> Hgher order functions </b>
      <p>A higher-order component is a function that takes a component and returns a new component.</p>
      <p>The purpose of a HOC is to enhance a component (usually a dumb component) with extra functionality. </p>
      <p>A HOC allows for reusability since in real-life applications there is a need to re-use the same functionalities in various similar kinds of components. A very common functionality is toggling.</p>
      </div>
  <div><b>Pure Functions  </b>Such functions are called “pure” because they do not attempt to change their inputs, and always return the same result for the same inputs. </div>
    </>
  );
}

export default App;
