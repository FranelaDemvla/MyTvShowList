import { useEffect } from 'react';
import './App.css';
import Filter from "./components/Filter";
import TvShowList from './components/TvShowList';
import { connect } from "react-redux";
import { getShowList } from "./state/actions";

function App(props) {
  const {showList, actionGetShowList} = props;

  useEffect(() => {
    actionGetShowList();
  }, [])

  return (
    <div className="main-container">
      <Filter/>
      <br/>
      <TvShowList showList={showList}/>
    </div>
  );
}

const mapStateToProps = (state) => ({
  showList: state.showsReducer.showList
})

const mapDispatchToProps = (dispatch) => ({
  actionGetShowList: () => dispatch(getShowList())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
