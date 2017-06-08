/**
 * Created by lena on 2017-03-22.
 */
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var DivisionTest = (function (_super) {
    __extends(DivisionTest, _super);
    function DivisionTest(props) {
        var _this = _super.call(this, props) || this;
        _this.operator1 = "2";
        _this.operator2 = "2";
        _this.operationSymbol = ":";
        _this.assesmentText = "";
        _this.numberOfGoodAnswers = 0;
        _this.numberOfBadAnswers = 0;
        _this.numberTotalAnswers = 0;
        _this.isTestVisible = false;
        _this.isStartButtonVisible = true;
        _this.isTimeForNextTask = false;
        _this.resultFontColour = 'grey';
        _this.checkBoxesSelected = new Array(10);
        _this._handleKeyPressTasksNumber = function (e) {
            if (e.key === 'Enter') {
                console.log("Количество примеров в тесте: " + _this.tasksNumberInput.value);
            }
        };
        _this._handleKeyPress = function (e) {
            if (e.key === 'Enter' && !_this.isTimeForNextTask) {
                console.info("1 Enter");
                _this.result = Number(_this.operator2) / Number(_this.operator1);
                var isCorrect = _this.result == Number(_this.textInput.value);
                _this.assesmentText = isCorrect ? 'Верно - жми Enter чтобы продолжить' : 'ОШИБКА - исправляй!';
                _this.numberTotalAnswers++;
                if (isCorrect) {
                    _this.numberOfGoodAnswers++;
                    _this.isTimeForNextTask = true;
                    _this.resultFontColour = 'green';
                }
                else {
                    _this.numberOfBadAnswers++;
                    if (_this.numberTotalAnswers == _this.tasksNumber) {
                        _this.endOfTestTime();
                    }
                    _this.isTimeForNextTask = false;
                    _this.resultFontColour = 'red';
                }
                _this.setState({
                    result: _this.result,
                    assesmentText: _this.assesmentText,
                    numberOfGoodAnswers: _this.numberOfGoodAnswers,
                    numberOfBadAnswers: _this.numberOfBadAnswers,
                    resultFontColour: _this.resultFontColour
                });
                console.info(_this.assesmentText);
            }
            else if (e.key === 'Enter' && _this.isTimeForNextTask) {
                console.info("2 Enter");
                if (_this.numberTotalAnswers < _this.tasksNumber) {
                    _this.createAndDisplayNextTask();
                }
                else {
                    _this.endOfTestTime();
                }
            }
            _this.textInput.focus();
        };
        _this.state = {
            testTimeSec: _this.props.testTimeSec
        };
        return _this;
    }
    DivisionTest.prototype.render = function () {
        var _this = this;
        return React.createElement("div", null,
            React.createElement("fieldset", { style: { fontSize: "120%" } },
                React.createElement("legend", null, " \u0412\u044B\u0431\u0435\u0440\u0438 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0434\u0435\u043B\u0438\u0442\u0435\u043B\u044F - \u043D\u0430 \u0447\u0442\u043E \u0434\u0435\u043B\u0438\u0442\u044C:"),
                React.createElement("div", null,
                    React.createElement("span", { className: this.checkBoxSelectedFor2 ? 'glyphicon glyphicon-check' : 'glyphicon glyphicon-unchecked', onClick: this.cbClickedFor2.bind(this) }, "2")),
                React.createElement("div", null,
                    React.createElement("span", { className: this.checkBoxSelectedFor3 ? 'glyphicon glyphicon-check' : 'glyphicon glyphicon-unchecked', onClick: this.cbClickedFor3.bind(this) }, "3")),
                React.createElement("div", null,
                    React.createElement("span", { className: this.checkBoxSelectedFor4 ? 'glyphicon glyphicon-check' : 'glyphicon glyphicon-unchecked', onClick: this.cbClickedFor4.bind(this) }, "4")),
                React.createElement("div", null,
                    React.createElement("span", { className: this.checkBoxSelectedFor5 ? 'glyphicon glyphicon-check' : 'glyphicon glyphicon-unchecked', onClick: this.cbClickedFor5.bind(this) }, "5")),
                React.createElement("div", null,
                    React.createElement("span", { className: this.checkBoxSelectedFor6 ? 'glyphicon glyphicon-check' : 'glyphicon glyphicon-unchecked', onClick: this.cbClickedFor6.bind(this) }, "6")),
                React.createElement("div", null,
                    React.createElement("span", { className: this.checkBoxSelectedFor7 ? 'glyphicon glyphicon-check' : 'glyphicon glyphicon-unchecked', onClick: this.cbClickedFor7.bind(this) }, "7")),
                React.createElement("div", null,
                    React.createElement("span", { className: this.checkBoxSelectedFor8 ? 'glyphicon glyphicon-check' : 'glyphicon glyphicon-unchecked', onClick: this.cbClickedFor8.bind(this) }, "8")),
                React.createElement("div", null,
                    React.createElement("span", { className: this.checkBoxSelectedFor9 ? 'glyphicon glyphicon-check' : 'glyphicon glyphicon-unchecked', onClick: this.cbClickedFor9.bind(this) }, "9")),
                React.createElement("div", null,
                    React.createElement("span", { style: { margin: '2%' } }, " \u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u0440\u0438\u043C\u0435\u0440\u043E\u0432 \u0432 \u0442\u0435\u0441\u0442\u0435 :"),
                    React.createElement("input", { type: "number", name: "tasksNumber", ref: function (input) { return _this.tasksNumberInput = input; }, onKeyPress: this._handleKeyPressTasksNumber.bind(this), style: { height: '30px', width: '60px' } }))),
            React.createElement("div", { style: { visibility: this.isStartButtonVisible ? 'visible' : 'hidden' } },
                React.createElement("button", { id: "startButton", type: "button", className: "btn btn-primary btn-md btn-block", onClick: this.startClicked.bind(this) }, "\u041D\u0430\u0447\u043D\u0435\u043C \u0438\u0441\u043F\u044B\u0442\u0430\u043D\u0438\u0435!")),
            React.createElement("div", { style: { visibility: !this.isStartButtonVisible ? 'visible' : 'hidden' } },
                React.createElement("div", { style: { fontSize: "400%" } },
                    React.createElement("span", { style: { margin: '1%' } }, this.operator2),
                    React.createElement("span", { style: { margin: '1%' } }, this.operationSymbol),
                    React.createElement("span", { style: { margin: '1%' } }, this.operator1),
                    React.createElement("span", { style: { margin: '1%' } }, "="),
                    React.createElement("input", { type: "number", name: "inputValue", ref: function (input) { return _this.textInput = input; }, onKeyPress: this._handleKeyPress.bind(this), size: 3, style: { height: '60px', width: '120px' } })),
                React.createElement("div", { style: { fontSize: "150%" } },
                    React.createElement("span", { style: { marginRight: '1%', color: this.resultFontColour } }, this.assesmentText))),
            React.createElement("div", null,
                React.createElement("h4", { id: "goodScore" },
                    React.createElement("span", { style: { marginRight: '1%', color: 'green' } },
                        " \u0412\u0435\u0440\u043D\u043E:",
                        this.numberOfGoodAnswers,
                        " "),
                    React.createElement("span", { style: { marginRight: '1%', color: 'red' } },
                        " \u041E\u0448\u0438\u0431\u043E\u043A:",
                        this.numberOfBadAnswers))));
    };
    DivisionTest.prototype.createAndDisplayNextTask = function () {
        /* this.operator1 = String(this.getRandomFromArray(this.arrayForOperator1));
         this.operator2 = String(this.getRandom2To9());*/
        var divider = this.getRandomFromArray(this.arrayForOperator1);
        this.operator1 = String(divider);
        this.operator2 = String(this.getRandom2To9() * divider);
        this.textInput.value = '';
        this.assesmentText = '';
        this.isTimeForNextTask = false;
        this.textInput.focus();
        this.setState({
            operator1: this.operator1,
            operator2: this.operator2,
            assesmentText: this.assesmentText,
            inputValue: this.textInput,
        });
    };
    DivisionTest.prototype.startClicked = function () {
        this.isTestVisible = true;
        this.isStartButtonVisible = false;
        this.numberOfGoodAnswers = 0;
        this.numberOfBadAnswers = 0;
        this.numberTotalAnswers = 0;
        this.isTimeForNextTask = false;
        this.tasksNumber = Number(this.tasksNumberInput.value);
        this.resultFontColour = 'grey';
        this.arrayForOperator1 = [];
        for (var i = 2; i <= this.checkBoxesSelected.length; i++) {
            if (this.checkBoxesSelected[i])
                this.arrayForOperator1.push(i);
        }
        var divider = this.getRandomFromArray(this.arrayForOperator1);
        this.operator1 = String(divider);
        this.operator2 = String(this.getRandom2To9() * divider);
        this.textInput.value = '';
        this.assesmentText = 'Напечатай результат и нажми Enter';
        this.textInput.focus();
        this.setState({
            operator1: this.operator1,
            operator2: this.operator2,
            assesmentText: this.assesmentText,
            inputValue: this.textInput,
            numberOfGoodAnswers: this.numberOfGoodAnswers,
            numberOfBadAnswers: this.numberOfBadAnswers,
            numberTotalAnsvers: this.numberTotalAnswers,
            isTestVisible: this.isTestVisible,
            isStartButtonVisible: this.isStartButtonVisible,
            tasksNumber: this.tasksNumber
        });
        //setTimeout(this.endOfTestTime.bind(this),Number(this.durationSec.value)*1000);
    };
    DivisionTest.prototype.endOfTestTime = function () {
        //this.isTestVisible = false;
        console.info('endOfTestTime(): ');
        this.isStartButtonVisible = true;
        this.isTimeForNextTask = false;
        this.setState({
            isStartButtonVisible: this.isStartButtonVisible
        });
    };
    DivisionTest.prototype.getRandom2To9 = function () {
        return Math.floor(Math.random() * 8) + 2;
        /*while(1===1){
         result= Math.floor(Math.random()*10 +1);

         if(result >=2 && result <10)
         return result;
         else
         continue;
         }*/
    };
    DivisionTest.prototype.getRandomFromArray = function (arrayToChooseFrom) {
        console.log("array to choose operator1 is:" + arrayToChooseFrom.toString());
        var length = arrayToChooseFrom.length;
        // Math.floor(Math.random() * (max - min + 1)) + min;Returns a random integer between min (inclusive) and max (inclusive)
        var randomIndex = Math.floor(Math.random() * length);
        console.log("radomIndex = " + randomIndex);
        return arrayToChooseFrom[randomIndex];
    };
    DivisionTest.prototype.setArrayForOperator1 = function (arrayToSet) {
        this.arrayForOperator1 = arrayToSet;
    };
    DivisionTest.prototype.cbClickedFor2 = function () {
        this.checkBoxSelectedFor2 = !this.checkBoxSelectedFor2;
        this.checkBoxesSelected[2] = this.checkBoxSelectedFor2;
        this.setState({ checkBoxSelectedFor2: this.checkBoxSelectedFor2 });
    };
    DivisionTest.prototype.cbClickedFor3 = function () {
        this.checkBoxSelectedFor3 = !this.checkBoxSelectedFor3;
        this.checkBoxesSelected[3] = this.checkBoxSelectedFor3;
        this.setState({ checkBoxSelectedFor3: this.checkBoxSelectedFor3 });
    };
    DivisionTest.prototype.cbClickedFor4 = function () {
        this.checkBoxSelectedFor4 = !this.checkBoxSelectedFor4;
        this.checkBoxesSelected[4] = this.checkBoxSelectedFor4;
        this.setState({ checkBoxSelectedFor4: this.checkBoxSelectedFor4 });
    };
    DivisionTest.prototype.cbClickedFor5 = function () {
        this.checkBoxSelectedFor5 = !this.checkBoxSelectedFor5;
        this.checkBoxesSelected[5] = this.checkBoxSelectedFor5;
        this.setState({ checkBoxSelectedFor5: this.checkBoxSelectedFor5 });
    };
    DivisionTest.prototype.cbClickedFor6 = function () {
        this.checkBoxSelectedFor6 = !this.checkBoxSelectedFor6;
        this.checkBoxesSelected[6] = this.checkBoxSelectedFor6;
        this.setState({ checkBoxSelectedFor6: this.checkBoxSelectedFor6 });
    };
    DivisionTest.prototype.cbClickedFor7 = function () {
        this.checkBoxSelectedFor7 = !this.checkBoxSelectedFor7;
        this.checkBoxesSelected[7] = this.checkBoxSelectedFor7;
        this.setState({ checkBoxSelectedFor7: this.checkBoxSelectedFor7 });
    };
    DivisionTest.prototype.cbClickedFor8 = function () {
        this.checkBoxSelectedFor8 = !this.checkBoxSelectedFor8;
        this.checkBoxesSelected[8] = this.checkBoxSelectedFor8;
        this.setState({ checkBoxSelectedFor8: this.checkBoxSelectedFor8 });
    };
    DivisionTest.prototype.cbClickedFor9 = function () {
        this.checkBoxSelectedFor9 = !this.checkBoxSelectedFor9;
        this.checkBoxesSelected[9] = this.checkBoxSelectedFor9;
        this.setState({ checkBoxSelectedFor9: this.checkBoxSelectedFor9 });
    };
    return DivisionTest;
}(React.Component));
exports.DivisionTest = DivisionTest;
//# sourceMappingURL=DivisionTest.js.map