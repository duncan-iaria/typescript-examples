import { actions } from '../../actions/';
import { EnthusiasmAction } from '../../actions/enthusiasmActions';
import { StoreState } from '../../types/index';
import { connect, Dispatch } from 'react-redux';

// COMPONENTS
import Test from './Test';

const { enthusiasmActions } = actions;

export function mapStateToProps( { enthusiasm, languageName }: StoreState ) {
    return {
        enthusiasm,
        name: languageName,
    };
}

export function mapDispatchToProps(dispatch: Dispatch<EnthusiasmAction>) {
        return {
            onIncrement: () => dispatch(enthusiasmActions.incrementEnthusiasm()),
            onDecrement: () => dispatch(enthusiasmActions.decrementEnthusiasm()),
        };
    }

export default connect(mapStateToProps, mapDispatchToProps)(Test);
