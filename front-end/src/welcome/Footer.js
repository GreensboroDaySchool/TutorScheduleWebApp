import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { grey900, darkWhite } from 'material-ui/styles/colors'

class Footer extends React.Component{
    styles = {};

    themeProp(item) {
        //noinspection JSUnresolvedVariable
        return this.props.muiTheme.palette[item];
    }

    syncTheme(){
        this.styles = {
            wrapper: {
                backgroundColor: grey900,
                color: darkWhite,
                padding: 30,
                textAlign: "center"
            },
            footerText: {
                fontWeight: 200,
                fontSize: 13
            }
        };
    }

    render(){
        this.syncTheme();
        return (
            <div style={this.styles.wrapper}>
                <p style={this.styles.footerText}>Greensboro Day School | TecIntel Club</p>
            </div>
        );
    }
}

export default muiThemeable()(Footer);
