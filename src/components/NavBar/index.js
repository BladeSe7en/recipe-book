import { connect } from 'react-redux';
import NavBar from './NavBar';

function mapStoreToProps(store){
    return {
        reciepes: store.Recipe.reciepes
        };
}

export default connect(mapStoreToProps)(NavBar);
