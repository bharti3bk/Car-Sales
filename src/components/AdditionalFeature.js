import React from 'react';
import {connect} from 'react-redux';
import {addAdditionalFeature} from '../store/Actions/index'

const AdditionalFeature = ({feature, addAdditionalFeature}) => {  
  const onAddClick = ()=> {
       addAdditionalFeature(feature); 
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick = {onAddClick}>Add</button>
      {feature.name} (+{feature.price})
    </li>
  );
};

export default connect(null, {addAdditionalFeature})(AdditionalFeature)
