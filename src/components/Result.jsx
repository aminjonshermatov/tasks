import React from 'react'
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(() => ({
    layout: {
        width: '80%',
        marginLeft: '1rem',
        marginRight: '1rem'
    },
    paper: {
        height: '40vh',
        marginTop: '3rem',
        marginBottom: '3rem',
        padding: '1rem',
    }
}));

const Result = ({ formData }) => {
    const classes = useStyles();
    const { name, surname, birthDate, select } = formData;

    return (
        <main className={classes.layout}>
            <Paper className={classes.paper}>
                <Typography component="h1" variant="h4" align="center">
                    Result
                </Typography>
                <Grid container spacing={3}>
                    <Grid item md={8} sm={6} xs={8}>
                        <b>Name:</b> {name}
                    </Grid>
                    <Grid item md={8} sm={6} xs={8}>
                        <b>Surname:</b> {surname}
                    </Grid>
                    <Grid item md={8} sm={6} xs={8}>
                        <b>Birth date:</b> {birthDate}
                    </Grid>
                    <Grid item md={8} sm={6} xs={8}>
                        {select}
                    </Grid>
                </Grid>
            </Paper>
        </main>
    );
};

const mapStateToProps = ({ data }) => {
    return {
        formData: data
    };
};

export default connect(mapStateToProps)(Result);