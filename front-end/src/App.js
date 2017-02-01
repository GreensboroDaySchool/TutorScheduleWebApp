import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import Drawer from 'material-ui/Drawer';
//noinspection JSUnresolvedVariable
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import User from './user/User';
import ActionHome from 'material-ui/svg-icons/action/home';

const styles = {
    bar: {
        position: "fixed"
    },
    contentWrapper: {
        paddingTop: 64
    }
};

class App extends React.Component {
    state = {
        theme: lightBaseTheme,
        menuOpened: false,
        user: new User(this)
    };

    /**
     * Static APIs
     */
    exposedAPI = {
        /**
         * Theme APIs
         */
        useLight: () => this.setState({
            theme: lightBaseTheme
        }),
        useDark: () => this.setState({
            theme: darkBaseTheme
        }),

        /**
         * Menu Controllers
         */
        showMenu: () => this.setState({
            menuOpened: true
        }),
        hideMenu: () => this.setState({
            menuOpened: false
        }),
        setMenuVisible: (visible) => this.setState({
            menuOpened: visible
        }),
        isMenuShown: () => this.state.menuOpened,

        /**
         * Accessor for current User
         */
        currentUser: () => this.state.user,
    };

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(this.state.theme)}>
                <div>
                    <Drawer open={this.state.menuOpened}
                            docked={false}
                            width={300}
                            onRequestChange={this.exposedAPI.setMenuVisible}>
                        <List>
                            <ListItem primaryText="Home" leftIcon={<ActionHome/>}/>
                        </List>
                        <Divider/>
                        <List>
                            <Subheader>You</Subheader>
                            <ListItem primaryText="Login"/>
                            <ListItem primaryText="View Schedule"/>
                        </List>
                    </Drawer>
                    <div>
                        <AppBar style={styles.bar}
                                title="GDS Tutor"
                                zDepth={0}
                                onLeftIconButtonTouchTap={this.exposedAPI.showMenu}/>
                        <div style={styles.contentWrapper}>
                            {this.props.children && React.cloneElement(this.props.children, {
                                app: this.exposedAPI // Pass API to children
                            })}
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
