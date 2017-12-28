// import { StoreState } from '../../../types
import { connect } from 'react-redux';

// COMPONENTS
import TestList from './TestList';

// PROPS
export interface Props {
    enthusiasmLevel?: number;
}

export function mapStateToProps( {enthusiasmLevel}: Props ) {
    return {
        enthusiasmLevel,
    };
}

export default connect( mapStateToProps )( TestList );
