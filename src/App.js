import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const moc = [
{
id: 0,
label: 'tab_1',
description: 'some text d888'
},
{
id: 1,
label: 'tab_2',
description: 'some text d77'
},
{
id: 2,
label: 'tab_3',
description: 'some text das d'
},
{
id: 3,
label: 'tab_4',
description: 'some text adsd asd asd asd '
}
];

class Tab extends Component {
constructor(props) {
super(props);

this.state = {
activeId: moc[0].id,
};

this.handleChangeTab = this.handleChangeTab.bind(this);
}

handleChangeTab(tabId) {
this.setState({ activeId: tabId });
}

render() {
const { description } = moc.find(({ id }) => id === this.state.activeId);
return (
<div className="tab-container">
<div className="tabs">
{moc.map(({ id, label }) => (
<div onClick={() => this.handleChangeTab(id)} className="item-tab" key={id}>{label}</div>
))}
</div>
<div className="tab-content">
{description}
</div>
</div>
)
}
}


class App extends Component {
constructor(props) {
super(props);

this.state = {};
}
render() {
return (
<div className="App">
<Tab />
</div>
);
}
}

export default App;
