import * as actions from '../../actions/';
import { StoreState } from '../../types/index';
import { connect, Dispatch } from 'react-redux';

// COMPONENTS
import Test from './Test';

export function mapStateToProps( { enthusiasm, languageName }: StoreState ) {
    return {
        enthusiasm,
        name: languageName,
    };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
        return {
            onIncrement: () => dispatch(actions.incrementEnthusiasm()),
            onDecrement: () => dispatch(actions.decrementEnthusiasm()),
        };
    }

export default connect(mapStateToProps, mapDispatchToProps)(Test);
