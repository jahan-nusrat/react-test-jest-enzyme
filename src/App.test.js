import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

//set up enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders without crashing', () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='app-component']");
  expect(appComponent.length).toBe(1)
});

test('Renders Increment Button', () => {
  const wrapper = shallow(<App />);
  const Button = wrapper.find("[data-test='increment-button']");
  expect(Button.length).toBe(1)
});

test("Renders Counter Display", () => {
  const wrapper = shallow(<App />);
  const Counter = wrapper.find("[data-test='counter-display']");
  expect(Counter.length).toBe(1)
});

test("Renders Counter Display at 0", () => {

});

test("clicking button increment the counter display", () => {

})