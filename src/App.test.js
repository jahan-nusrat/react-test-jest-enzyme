/* eslint-disable testing-library/await-async-query */
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

//set up enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

/** 
* Factory fuction to create a ShallowWrapper for APP component.
* @function setup
*/

const setup = () => shallow(<App />);

//alternative
/* let wrapper;
beforeEach(() => {
  shallow(<App />)
}) */


/**
 * Find a element in the DOM
 * @param {String} value - Value of the data-test attribute.
 */

const findByTestAttr = (wrapper, val) => {
  const selector = `[data-test="${val}"]`;
  return wrapper.find(selector);
}

test('renders without crashing', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper,  'app-component');
  expect(appComponent.length).toBe(1)
});

test('Renders Increment Button', () => {
  const wrapper = setup();
  const Button = findByTestAttr(wrapper, 'increment-button');
  expect(Button.length).toBe(1)
});

test("Renders Counter Display", () => {
  const wrapper = setup();
  const Counter = findByTestAttr(wrapper, 'counter-display');
  expect(Counter.length).toBe(1)
});

test("Renders Counter Display at 0", () => {
  const wrapper = setup();
  const Count = findByTestAttr(wrapper, 'count').text();
  expect(Count).toBe("0")
});

test("clicking button increment the counter display", () => {
  const wrapper = setup();
  //find the button
  const button = findByTestAttr(wrapper, 'increment-button')
  //click the button
  button.simulate('click');
  //find the display, and test that the counter is incremented
  const display = findByTestAttr(wrapper, 'count').text();
  expect(display).toBe('1');
})