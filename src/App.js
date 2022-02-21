import './App.css';
import { connect } from 'react-redux';

function App() {
  
  return (
    <div className="App">
      <div>Age: <span>{props.age}</span></div>
      <button onClick={props.onAgeUp}>Age UP</button>
      <button onClick={props.onAgeDown}>Age DOWN</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return (
    age: state.age
  )
}
const mapDispatchToProps = (dispatch) => {
  return (
    onAgeUp: () => dispatch({type: 'AGE_UP', value: 1}),
    onAgeDown: () => dispatch({type: 'AGE_DOWN', value: 1})
  )
}
connect(mapStateToProps,mapDispatchToProps )
export default App;
