jest.unmock('../../lib/app');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import App from '../../lib/app';

describe('App', function() {
it('calls')

});



















describe('fetchCurrentUser', () => {

  it('calls into $.ajax with the correct params', () => {
    const $ = require('jquery');
    const fetchCurrentUser = require('../fetchCurrentUser');

    // Call into the function we want to test
    const dummyCallback = () => {};
    fetchCurrentUser(dummyCallback);

    // Now make sure that $.ajax was properly called during the previous
    // 2 lines
    expect($.ajax).toBeCalledWith({
      type: 'GET',
      url: 'http://example.com/currentUser',
      success: jasmine.any(Function),
    });
  });
});
