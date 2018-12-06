import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            articles: [
                {title: "React Redux Tutorial for Beginners", id: 1},
                {title: "Redux e React: cos'è Redux e come usarlo con React", id: 2}
            ]
        };
    }

    render() {
        const {articles} = this.state;
        return <ul>{articles.map(el => <li key={el.id}>{el.title}</li>)}</ul>;
    }
}

export default App;