import React, { useEffect } from 'react';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundary from '../components/ErrorBoundary';
import {connect} from 'react-redux';
import {requestRobots, setSearchField} from '../actions';
import CounterButton from '../components/CounterButton';


const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.searchRobots.robots,
    error: state.searchRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    fetchRobots: (httpSting) => dispatch(requestRobots(httpSting))
  }
}


const App2 = (props) => {
  const { searchField, robots, onSearchChange, fetchRobots, error } = props;

  useEffect(() => {
    fetchRobots('https://jsonplaceholder.typicode.com/users')
  }, []);
  const filteredRobots = robots.filter(robot =>{
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return !robots.length && !error
    ? <h1>Loading...</h1>
    : (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={onSearchChange}/>
        <CounterButton style={{width: '100%'}} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(App2);
