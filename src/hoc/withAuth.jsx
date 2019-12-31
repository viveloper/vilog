import React from 'react'
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

function withAuth(WrappedComponent) {  
  const EnhancedComponent = (props) => {
    const token = useSelector(state => state.token, [])
    if(token){
      return <WrappedComponent {...props} token={token} />
    }
    else {
      return <Redirect to="/login" />
    }    
  }
  EnhancedComponent.displayName = `WithSubscription(${getDisplayName(WrappedComponent)})`;
  return EnhancedComponent
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default withAuth