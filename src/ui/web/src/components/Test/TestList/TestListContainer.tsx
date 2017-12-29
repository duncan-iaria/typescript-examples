import { EnthusiasmState } from '../../../types';
import { connect } from 'react-redux';

// COMPONENTS
import TestList from './TestList';

// PROPS
export interface Props {
    enthusiasm?: EnthusiasmState;
}

export function mapStateToProps( { enthusiasm }: Props ) {
    return {
        enthusiasm,
    };
}

export default connect( mapStateToProps )( TestList );
