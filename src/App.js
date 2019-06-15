import React from 'react';
import './style/app.css'
import GameContainer from './containers/GameContainer';
import {Provider} from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
    <body>
    <div className="app">
    <GameContainer />
    </div>
    </body>
    </Provider>
  );
}

export default App;
