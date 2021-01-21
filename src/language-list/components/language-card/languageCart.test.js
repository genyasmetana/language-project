import React from 'react';
import { shallow } from 'enzyme';
import { LanguageCard } from './LanguageCard';

describe('Language Card Component', () => {
  it('It should render Language Card', () => {
    const component = shallow(<LanguageCard />);
    const wrapper = component.find('.card');
    expect(wrapper.length).toBe(1);
  });
});
