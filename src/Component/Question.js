import React, {Component} from "react";

class Question extends Component {
    render() {
        return (
            <header>

                {/*삭제 버튼*/}
                <button onClick="remove()" type="reset" className="btn-remove">지문 삭제</button>
                {/*문제*/}
                <div className="question">
                    <p>1. <input id="input1" type="text" size="80" placeholder="첫번 째 질문을 입력하세요"/></p>
                </div>
                {/*보기*/}
                <div className="tests" id="input-tests">
                <div className="test">
                    <input type="radio" name="chk_info" value="1"/>
                    1 <input type="text" size="80" placeholder="첫번째 보기"/>
                </div>
                <div className="test">
                    <input type="radio" name="chk_info" value="2"/>
                    2 <input type="text" size="80" placeholder="두번째 보기"/>
                </div>
                </div>
                {/*문항 추가 버튼*/}
                <button onClick="plus()" type="submit" className="btn btn-primary">문항 추가하기</button>

            </header>
        );
    }
}

export default Question;