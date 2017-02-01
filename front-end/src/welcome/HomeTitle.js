import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

class HomeTitle extends React.Component {
    styles = {};

    greetings() {
        let date = new Date();
        let hours = date.getHours();
        let s = "";
        if (hours < 6) {
            s = "It's still early";
        } else if (hours < 12) {
            s = "Good morning";
        } else if (hours < 20) {
            s = "Good afternoon";
        } else {
            s = "It's a bit late now";
        }
        return s;
    }

    themeProp(item) {
        //noinspection JSUnresolvedVariable
        return this.props.muiTheme.palette[item];
    }

    syncTheme() {
        this.styles = {
            wrapper: {
                backgroundColor: this.themeProp("primary1Color"),
                overflow: "hidden",
                padding: 24
            },
            textWrapper: {
                margin: "16px auto 0 auto",
                marginTop: 25,
                textAlign: "center",
                backgroundColor: this.themeProp("primary1Color"),
                color: this.themeProp("alternateTextColor"),
                padding: 24,
                paddingBottom: 72,
                paddingTop: 20
            },
            header1: {
                color: this.themeProp("alternateTextColor"),
                fontWeight: 300,
                fontSize: 56,
                marginTop: 0
            },
            header2: {
                color: this.themeProp("alternateTextColor"),
                fontWeight: 300,
                fontSize: 24
            },
            icon: {
                height: 200
            },
            startUpButton: {

            },
            startUpButtonIcon: {
                color: this.themeProp("primary1Color"),
            },
            actions: {
                marginTop: 40
            },
            action: {
                margin: 10
            }
        }
    }

    render() {
        this.syncTheme();
        return (
            <Paper style={this.styles.wrapper} zDepth={2}>
                <div style={this.styles.textWrapper}>
                    <img style={this.styles.icon} role="presentation" src="resources/images/logo.png"/>
                    <h1 style={this.styles.header1}>{this.greetings()}</h1>
                    <h2 style={this.styles.header2}>Find someone who can help you with your academics</h2>
                    <div style={this.styles.actions}>
                        <div style={this.styles.action}>
                            <RaisedButton icon={
                                <i style={this.styles.startUpButtonIcon} className="fa fa-ambulance"/>
                            } style={this.styles.startUpButton}
                              label="I Need Help"
                              labelColor={this.themeProp("primary1Color")}/>
                        </div>
                    </div>
                </div>
            </Paper>
        );
    }
}

export default muiThemeable()(HomeTitle)
