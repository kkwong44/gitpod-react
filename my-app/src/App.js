import logo from './logo.svg';
import './App.css';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';
import EventsClass from './components/EventsClass';
import EventsFunctional from './components/EventsFunctional';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
import NestingComponents from './components/NestingComponents';
import MethodsAsPropsParent from './components/MethodsAsPropsParent';
import RenderingLists from './components/RenderingLists';
import LifeCyclesCDM from './components/LifeCyclesCDM';
import LifeCyclesCDU from './components/LifeCyclesCDU';
import LifeCyclesCWU from './components/LifeCyclesCWU';
import ControlledForm from './components/ControlledForm';
import UncontrolledForm from './components/UncontrolledForm';
import SearchBar from './components/SearchBar';
import HooksCounter from './components/HooksCounter';
import ControlledFormHooks from './components/ControlledFormHooks';
import UseStateWithArrays from './components/UseStateWithArrays';
import UseStateWithObjects from './components/UseStateWithObjects';
import ClassCounter from './components/ClassCounter';
import UseEffectCounter from './components/UseEffectCounter';
import UseEffectCounterContainer from './components/UseEffectCounterContainer';
import HTTPRequests from './components/HTTPRequests';
import HTTPPost from './components/HTTPPost';
import HTTPHooks from './components/HTTPHooks';

function App() {
  return (
    <div className="App">
        {/* <FunctionalGreetingWithProps greeting="nice to meet you!" name="Mike" age="32" /> */}
        {/* <StatefulGreeting greeting="I'm a stateful class component!" name="Mike" /> */}
        {/* <StatefulGreetingWithCallback greeting="I'm a stateful class component!" name="Mike" /> */}
        {/* <StatefulGreetingWithPrevState /> */}
        {/* <EventsFunctional /> */}
        {/* <EventsClass /> */}
        {/* <ConditionalRenderingClass /> */}
        {/* <ConditionalRenderingFunctional connected={true} /> */}
        {/* <NestingComponents /> */}
        {/* <MethodsAsPropsParent /> */}
        {/* <RenderingLists /> */}
        {/* <LifeCyclesCDM /> */}
        {/* <LifeCyclesCDU /> */}
        {/* <LifeCyclesCWU /> */}
        {/* <ControlledForm /> */}
        {/* <UncontrolledForm /> */}
        {/* <SearchBar /> */}
        {/* <HooksCounter /> */}
        {/* <ControlledFormHooks /> */}
        {/* <UseStateWithArrays/> */}
        {/* <UseStateWithObjects /> */}
        {/* <ClassCounter /> */}
        {/* <UseEffectCounter /> */}
        {/* <UseEffectCounterContainer /> */}
        {/* <HTTPRequests /> */}
        {/* <HTTPPost /> */}
        <HTTPHooks />
    </div>
  );
}

export default App;
