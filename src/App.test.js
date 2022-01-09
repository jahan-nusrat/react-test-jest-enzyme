import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

//set up enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders without crashing', () => {
  const wrapper = shallow(<App />);
  const toFind = wrapper.find("[data-test='app-component']");
  expect(toFind.length).toBe(1)
});

test('Renders Increment Button', () => {

});

test("Renders Counter Display", () => {

});

test("Renders Counter Display at 0", () => {

});

test("clicking button increment the counter display", () => {

})