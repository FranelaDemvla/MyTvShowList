import './App.css';
import Filter from "./components/Filter";
import TvShowList from './components/TvShowList';
import { connect } from "react-redux";
import { testAction } from "./state/actions";
import { Button } from '@material-ui/core';

function App(props) {
  const {test, actionTestAction} = props;

  return (
    <div className="main-container">
      <Filter/>
      <h1>{test}</h1>
      <Button onClick={() => actionTestAction()}/>
      <br/>
      <TvShowList/>
    </div>
  );
}

const mapStateToProps = (state) => ({
  test: state.showsReducer.test
})

const mapDispatchToProps = (dispatch) => ({
  actionTestAction: () => dispatch(testAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
