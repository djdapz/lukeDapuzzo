// setup file
import {configure} from 'enzyme';
import Enzyme, {shallow, render, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

process.env.LUKE_ENV = "TEST";

configure({adapter: new Adapter()});
