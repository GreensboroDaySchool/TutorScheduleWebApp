import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import HomeTitle from './HomeTitle';
import Introduction from './Introduction';
import Footer from './Footer';

const styles = {
    contentWrapper: {

    },
    bar: {
        position: "fixed"
    }
};

export default class Welcome extends React.Component{
    state = {
        theme: lightBaseTheme
    };

    useLight(){
        this.setState({
            theme: lightBaseTheme
        });
    }

    useDark(){
        this.setState({
            theme: darkBaseTheme
        });
    }

    render(){
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(this.state.theme)}>
                <div>
                    <AppBar style={styles.bar} title="GDS Tutor" zDepth="0"/>
                    <div style={styles.contentWrapper}>
                        <HomeTitle/>
                        <Introduction/>
                        <Footer/>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}
