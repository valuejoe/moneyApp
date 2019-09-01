import React from 'react';
import { Container, Grid } from '@material-ui/core';

function GridColumnCenter({ children }) {
    return (
        <Container maxWidth="md" >
            <Grid
                container
                spacing={6}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}
            >
                {children}
            </Grid>
        </Container>
    )
}

export default GridColumnCenter