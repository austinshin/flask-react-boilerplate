import React from 'react';
import Subcomponent from './Subcomponent';
import { Route, Switch } from 'react-router-dom';

const Polygon = (props) => {

  function getProps(e) {
    console.log('props', props.items);
  }

  return (
    <div className='polygon'>
        Polygon
      <Switch>
        {/* <Route path='/polygon/subroute' component={Subcomponent} /> */}
      </Switch>
    </div>
  )
}

export default Polygon;