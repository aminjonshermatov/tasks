import React from 'react'
import { Provider } from 'react-redux';
import store from './store';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Form from './components/Form';
import Result from './components/Result';

const useStyles = makeStyles(() => ({
    root: {
        height: '98vh',
        width: '98vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}));

const App = () => {
    const classes = useStyles();
    return (
        <Provider store={store}>
            <Grid container className={classes.root}>
                <Grid item md={12}>
                    <Grid container justify="center" spacing={2}>
                        <Grid item md={5}>
                            <Form />
                        </Grid>
                        <Grid item md={5}>
                            <Result />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Provider>
    )
}

export default App
