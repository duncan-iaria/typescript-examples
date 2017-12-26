import * as React from 'react';
import * as enzyme from 'enzyme';

// COMPONENT

import Test from './Test';

// TESTS
it( 'renders the correct text when no enthusiasm level is given', () => {
    const hello = enzyme.shallow(<Test name='Duncan' />);
    expect( hello.find( ".greeting" ).text() ).toEqual( 'test rendering: Duncan!' );
});