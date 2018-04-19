// setup file
import {configure} from 'enzyme';
import Enzyme, {shallow, render, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {expect} from "chai";

configure({adapter: new Adapter()});

global.shallow = shallow;
global.render = render;
global.mount = mount;

global.describe = describe;
global.it = it;

global.expect = expect;
