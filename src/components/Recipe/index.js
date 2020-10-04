import { connect } from 'react-redux';
import Recipe from './Recipe';

function mapStoreToProps(store){
    console.log('store: ',store)
    return {
    reciepes: store.Recipe.reciepes,
    newReciepe: store.Recipe.newReciepe,
    index: store.Recipe.index
    };
}

export default connect(mapStoreToProps)(Recipe);
