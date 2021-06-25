import React, { Component } from "react";
import './App.css';
import Question from './Component/Question.js';
import PlusButton from './Component/PlusButton.js';


class App extends Component {
    constructor(props) {
        super(props);
        this.max_example_id = 3;
        this.state = {
            mode: 'read',
            example: [
                {id: 1, title: '1'},
                {id: 2, title: '2'}
            ]
        }
    }
    getPlusExample() {
        var i = 0;
        while (i < this.state.example.length) {
            var data = this.state.example[i];
            if (data.id === this.state.max_example_id) {
                return data;
                break;
            }
            i = i + 1;
        }
    }
    getContent() {
        var _article = null;
        if (this.state.mode === 'read') {
            // _article = <Question></Question>
        } else if (this.state.mode === 'plus') {
            // _article = <PlusButton></PlusButton>
            var _example = this.getPlusExample();
            _article = <PlusButton date={_example} onClick={function (_title) {
                    this.max_example_id = this.max_example_id + 1;
                    var _examples = this.state.contents.concat(
                        {id: this.max_example_id, title: _title}
                    );
                    this.setState({
                        example: _examples
                    });
                }.bind(this)}></PlusButton>


        }
        return _article;
    }
    render() {

        return (
            <div className="App">
                <Question
                    onChangeMode={function (){
                        this.setState({mode:'read'});
                    }.bind(this)}
                >
                </Question>
                {this.getContent()}
            </div>
        );
    }
}

export default App;
