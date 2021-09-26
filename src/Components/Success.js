import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";

class Success extends Component {
    render() {
        return (
            <Grid item>
                <h1 style={{textAlign: "center", color: "#00e676"}}>Dein Entbannungsantrag wurde nun an die Moderation des Südpol Servers weitergeleitet!</h1>
                <h4>NBitte gebe uns Zeit, dein Entbannungsantrag zu überprüfen. Das Ausnutzen des Entbannungsantrag System führt zu einer Sperrung des Entbannungsantrag.</h4>
            </Grid>
        );
    }
}

export default Success;
