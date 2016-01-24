import React from 'react/addons';
import Voting from '../../src/components/Voting';
import { expect } from 'chai';

const { renderIntoDocument, scryRenderDOMComponentsWithTag } = React.addons.TestUtils;

describe( 'Voting', () => {
    it( 'renders a pair of buttons', () => {
        const component = renderIntoDocument(
            <Voting pair={ [ 'Trainspotting', '28 Days Later'] }/>
        );

        const buttons = scryRenderDOMComponentsWithTag( component, 'button' );

        expect( buttons.length ).to.equal( 2 );
        expect( buttons[ 0 ].textContent ).to.equal( 'Trainspotting' );
        expect( buttons[ 1 ].textContect ).to.equal( '28 Days Later' );
    });
});
