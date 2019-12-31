import React from 'react'
import Layout from '../components/Layout'

export default function withLayout(WrappedComponent) {
  const EnhancedComponent = (props) => {
    return (
      <Layout>
        <WrappedComponent {...props} />
      </Layout>
    )
  }
  EnhancedComponent.displayName = `withLayout(${getDisplayName(WrappedComponent)})`;
  return EnhancedComponent
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}