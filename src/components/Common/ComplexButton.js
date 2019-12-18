import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

export default function GroupedButtons() {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
                <Grid container spacing={1} direction="column" alignItems="">
                    <Grid item>
                        <ButtonGroup variant="contained" size="small" aria-label="small contained button group">
                            <Button color='white'>normal</Button>
                            <Button color='yellow'>high</Button>
                            <Button color='red'>urgent</Button>
                        </ButtonGroup>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
