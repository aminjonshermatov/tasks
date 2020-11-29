import React from 'react'
import { Provider } from 'react-redux';
import store from './store';
import Form from './components/Form';
import Result from './components/Result';

const App = () => {
    return (
        <Provider store={store}>
            <Form />
            <Result />
        </Provider>
    )
}

export default App
