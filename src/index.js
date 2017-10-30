import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyBthaPJesHinO3TSraOW3yph3BPL7mtGhg';


//create a component. This component should produce
// some HTML

const App = () => {
  return <div>Hi!</div>;
}

// Take this component's generated HTML and put it on the
// page(in the DOM)

ReactDOM.render(<App />, document.querySelector('.container')); //wrap in JSX Tags to instiate
