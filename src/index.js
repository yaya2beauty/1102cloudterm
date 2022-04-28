import React,{ createContext } from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss';
import Page from './Page'

export const InitContext = createContext();
function MyComponent() {
  return (
      <Page/>
  );

}
  ReactDOM.render(
  <MyComponent />,
  document.getElementById('root')
);

export default MyComponent;