import React, {Component} from "react";

class PlusButton extends Component {
    render() {
        return (
            <article>

                {/*<form action="plus" method="post"*/}
                {/*      onSubmit={function (e){*/}
                {/*          e.preventDefault();*/}
                {/*          this.props.onSubmit(*/}
                {/*              e.target.title.value*/}
                {/*          );*/}
                {/*      }.bind(this)}>*/}

                {/*<input type="radio" name="chk_info" value="3"/>*/}
                {/*<input*/}
                {/*    placeholder={"번째 질문"}*/}
                {/*/><br/>*/}
                {/*</form>*/}

                <input onClick={function (e) {
                    e.preventDefault();
                    this.props.onChangeMode('plus');
                }.bind(this)}></input>

            </article>

        );
    }
}

export default PlusButton;