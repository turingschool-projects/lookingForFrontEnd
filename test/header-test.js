import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import TestUtils from "react-addons-test-utils";

import Header from '../lib/components/Header';
import Link from 'react-router';

describe('<Header />', () => {

  it('should render an <Link>', () => {
    const wrapper = mount(<Header/>);
    expect(wrapper.find('Link')).to.have.length(1);
  });

  it('contains a class of nav', () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper.hasClass('nav')).to.equal(true);
  });

  it('has an <Link> with LookingFor text', () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper.html()).to.equal(`<div class="nav"><nav class="navbar-fixed-top navbar navbar-default"><div class="container"><div id="brand" class="navbar-header"><a class="navbar-brand">Looking For</a></div></div></nav></div>`);
  });
});
