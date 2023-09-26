import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import View from './tree1/View';
import View2 from './tree2/View';

function App() {
  return (
    <Provider store={store}>
      <View />
      <View2 />
    </Provider>
  );
}

export default App;