import React from 'react';
import HomeTitle from './HomeTitle';
import Introduction from './Introduction';
import Footer from './Footer';

const styles = {
    contentWrapper: {

    }
};

export default class Welcome extends React.Component{
    render(){
        return (
            <div style={styles.contentWrapper}>
                <HomeTitle app={this.props.app}/>
                <Introduction/>
                <Footer/>
            </div>
        );
    }
}
