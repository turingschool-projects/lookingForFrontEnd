jest.mock('searchBar');
jest.unmock('../lib/components/header');

import React from 'react';
import ReactDOM from 'react-dom';
import header from '../lib/components/header';
var TestUtils = require('react-addons-test-utils');

describe('header', function() {
  it('renders an a tag with LookingFor', function() {
    beforeEach(() => {
      require('searchBar').setMockSearchBar
    });

    var header = TestUtils.renderIntoDocument( <header />);
    var a = TestUtils.findRenderedDomComponentWithTag( header, 'a');

    expect(a.getDomNode().textcontent).toEqual('LookingFor');
  });
});

