import React from 'react';

import { getFunName } from '../helpers';

class StorePicker extends React.Component {
   
    goToStore(event) {
        // prevent page refresh after form is submitted
        event.preventDefault();
        // get the input store
        let storeId = this.storeInput.value;
        console.log(`this is the store ID ${storeId}`);
        // route to /store/:storeId
        this.context.router.transitionTo(`/store/${storeId}`)
    }

    render() {
      return ( 
        <form className="store-selector" onSubmit={(e) => this.goToStore(e)} >
          <h2> Please enter a store </h2>    
          <input type="text" required placeholder="Store Name" defaultValue={ getFunName() } ref={ (input) => { this.storeInput = input } }/>  
          <button type="submit"> Visit Store→ </button>   
        </form>
      )
    }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
};

export default StorePicker;