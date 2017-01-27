import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export default class Welcome extends React.Component{
    render(){
        return (
            <MuiThemeProvider>
                <AppBar
                    title="GDS Tutor Project"
                />
            </MuiThemeProvider>
        );
    }
}
