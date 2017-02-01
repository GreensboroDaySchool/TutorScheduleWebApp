import React from 'react';
import Divider from 'material-ui/Divider';
import muiThemeable from 'material-ui/styles/muiThemeable';

class Introduction extends React.Component{
    styles = {};

    themeProp(item) {
        //noinspection JSUnresolvedVariable
        return this.props.muiTheme.palette[item];
    }

    syncTheme(){
        this.styles = {
            wrapper: {
                color: this.themeProp("textColor"),
                padding: 40,
                paddingTop: 20,
                backgroundColor: this.themeProp("canvasColor")
            },
            title: {
                color: this.themeProp("textColor"),
                textAlign: "center",
                fontWeight: 300,
                fontSize: 30
            },
            introText: {
                color: this.themeProp("textColor")
            }
        };
    }

    render(){
        this.syncTheme();
        return (
            <div style={this.styles.wrapper}>
                <h1 style={this.styles.title}>GDS Tutor Project</h1>
                <Divider />
                <p style={this.styles.introText}>
                    An express online scheduling application for Greensboro Day School students
                    to make appointments with teachers and peers.
                </p>
            </div>
        );
    }
}

export default muiThemeable()(Introduction);
