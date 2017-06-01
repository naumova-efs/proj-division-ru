/**
 * Created by lena on 2017-03-22.
 */

import * as React from "react";
export interface DivisionProps {
    testTimeSec:number
}

export class DivisionTest extends React.Component<DivisionProps, any>{
    private operator1 :string = "2";
    private operator2 :string = "2";
    private result: number;

    private textInput: any;

    private operationSymbol: string = ":";
    private assesmentText: string = "";

    private numberOfGoodAnswers: number = 0;
    private numberOfBadAnswers: number= 0;
    private numberTotalAnswers: number = 0;


    private isTestVisible : boolean = false;
    private isStartButtonVisible : boolean = true;

    private isTimeForNextTask : boolean = false;
    private resultFontColour:string = 'grey';

    private checkBoxesSelected:boolean[]  = new Array(10);
    private checkBoxSelectedFor2:boolean;
    private checkBoxSelectedFor3:boolean;
    private checkBoxSelectedFor4:boolean;
    private checkBoxSelectedFor5:boolean;
    private checkBoxSelectedFor6:boolean;
    private checkBoxSelectedFor7:boolean;
    private checkBoxSelectedFor8:boolean;
    private checkBoxSelectedFor9:boolean;



    private arrayForOperator1:any[8];
    //private durationSec:any;

    private tasksNumberInput:any;
    private tasksNumber:number;


    constructor(props:DivisionProps) {
        super(props);

        this.state = {
            testTimeSec:this.props.testTimeSec
        };
    }


    public render ():JSX.Element{
        return<div>

            <fieldset style={{fontSize:"120%"}}>
                <legend> Выбери значения делителя - на что делить:</legend>
                <div>
                   <span className={this.checkBoxSelectedFor2 ? 'glyphicon glyphicon-check' : 'glyphicon glyphicon-unchecked'}
                         onClick={this.cbClickedFor2.bind(this)}>2</span>
                </div>
                <div>
                   <span className={this.checkBoxSelectedFor3 ? 'glyphicon glyphicon-check' : 'glyphicon glyphicon-unchecked'}
                         onClick={this.cbClickedFor3.bind(this)}>3</span>
                </div>
                <div>
                   <span className={this.checkBoxSelectedFor4 ? 'glyphicon glyphicon-check' : 'glyphicon glyphicon-unchecked'}
                         onClick={this.cbClickedFor4.bind(this)}>4</span>
                </div>
                <div>
                   <span className={this.checkBoxSelectedFor5 ? 'glyphicon glyphicon-check' : 'glyphicon glyphicon-unchecked'}
                         onClick={this.cbClickedFor5.bind(this)}>5</span>
                </div>
                <div>
                   <span className={this.checkBoxSelectedFor6 ? 'glyphicon glyphicon-check' : 'glyphicon glyphicon-unchecked'}
                         onClick={this.cbClickedFor6.bind(this)}>6</span>
                </div>
                <div>
                   <span className={this.checkBoxSelectedFor7 ? 'glyphicon glyphicon-check' : 'glyphicon glyphicon-unchecked'}
                         onClick={this.cbClickedFor7.bind(this)}>7</span>
                </div>
                <div>
                   <span className={this.checkBoxSelectedFor8 ? 'glyphicon glyphicon-check' : 'glyphicon glyphicon-unchecked'}
                         onClick={this.cbClickedFor8.bind(this)}>8</span>
                </div>
                <div>
                   <span className={this.checkBoxSelectedFor9? 'glyphicon glyphicon-check' : 'glyphicon glyphicon-unchecked'}
                         onClick={this.cbClickedFor9.bind(this)}>9</span>
                </div>

                <div >
                    <span style={{margin:'2%'}}> Количество примеров в тесте :</span>
                    <input type="number" name="tasksNumber"
                           ref={(input)=> this.tasksNumberInput = input}
                           onKeyPress={this._handleKeyPressTasksNumber.bind(this)}
                           style={{ height: '30px', width: '60px'}}

                    />

                </div>

            </fieldset>




            <div style={{visibility: this.isStartButtonVisible?'visible':'hidden'}} >
                <button id="startButton" type="button"
                        className="btn btn-primary btn-md btn-block"
                        onClick={this.startClicked.bind(this)}>Начнем испытание!
                </button>
            </div>

            <div style={{visibility: !this.isStartButtonVisible?'visible':'hidden'}} >
                <div style={{fontSize:"400%"}}>
                     <span style={{margin:'1%'}}>
                         {this.operator2}
                     </span>
                    <span style={{margin:'1%'}}>{this.operationSymbol}</span>
                    <span style={{margin:'1%'}}>
                         {this.operator1}
                     </span>
                    <span style={{margin:'1%'}}>=</span>
                    <input type="number" name="inputValue"
                           ref={(input)=> this.textInput = input}
                           onKeyPress={this._handleKeyPress.bind(this)}
                           size={3}
                           style={{ height: '60px', width: '120px'}}

                    />

                </div>

                <div style={{fontSize:"150%"}}>
                    <span style={{marginRight:'1%', color:this.resultFontColour }}>{this.assesmentText}</span>

                </div>
            </div>

            <div>
                <h4 id= "goodScore" >
                    <span style={{marginRight:'1%', color:'green' }}> Верно:{this.numberOfGoodAnswers} </span>
                    <span style={{marginRight:'1%', color:'red' }}> Ошибок:{this.numberOfBadAnswers}</span>
                </h4>

            </div>

        </div>
    }
    public _handleKeyPressTasksNumber = (e:any) => {
        if (e.key === 'Enter') {
            console.log("Количество примеров в тесте: "+this.tasksNumberInput.value );
        }
    };

    public _handleKeyPress = (e:any) => {
        if (e.key === 'Enter' && !this.isTimeForNextTask) {
            console.info("1 Enter");
            this.result = Number(this.operator2) / Number(this.operator1);
            let isCorrect:boolean = this.result == Number(this.textInput.value);
            this.assesmentText = isCorrect ? 'Верно - жми Enter чтобы продолжить' : 'ОШИБКА - исправляй!';
            this.numberTotalAnswers++;
            if(isCorrect) {
                this.numberOfGoodAnswers++;
                this.isTimeForNextTask = true;
                this.resultFontColour = 'green';
            }
            else {
                this.numberOfBadAnswers++;
                if(this.numberTotalAnswers == this.tasksNumber) {
                    this.endOfTestTime();
                }

                this.isTimeForNextTask = false;
                this.resultFontColour = 'red';
            }

            this.setState({
                    result: this.result,
                    assesmentText: this.assesmentText,
                    numberOfGoodAnswers: this.numberOfGoodAnswers,
                    numberOfBadAnswers: this.numberOfBadAnswers,
                    resultFontColour: this.resultFontColour
                }

            );
            console.info(this.assesmentText);
        } else if (e.key === 'Enter' && this.isTimeForNextTask){
            console.info("2 Enter");
            if(this.numberTotalAnswers < this.tasksNumber) {
                this.createAndDisplayNextTask();

            }else{
                this.endOfTestTime();

            }

        }
        this.textInput.focus();

    };

    public createAndDisplayNextTask(): void{
        /* this.operator1 = String(this.getRandomFromArray(this.arrayForOperator1));
         this.operator2 = String(this.getRandom2To9());*/
        let divider :number = this.getRandomFromArray(this.arrayForOperator1);
        this.operator1 = String(divider);
        this.operator2 = String(this.getRandom2To9()* divider) ;

        this.textInput.value ='';
        this.assesmentText = '';
        this.isTimeForNextTask= false;
        this.textInput.focus();

        this.setState({
                operator1: this.operator1,
                operator2: this.operator2,
                assesmentText: this.assesmentText,
                inputValue: this.textInput,

            }

        );


    }

    public startClicked(): void{

        this.isTestVisible = true;
        this.isStartButtonVisible = false;

        this.numberOfGoodAnswers = 0;
        this.numberOfBadAnswers = 0;
        this.numberTotalAnswers = 0;
        this.isTimeForNextTask= false;
        this.tasksNumber =  Number(this.tasksNumberInput.value);
        this.resultFontColour = 'grey';

        this.arrayForOperator1 = [];


        for(let i=2; i<=this.checkBoxesSelected.length; i++){
            if(this.checkBoxesSelected[i])
                this.arrayForOperator1.push(i);
        }

        let divider :number = this.getRandomFromArray(this.arrayForOperator1);
        this.operator1 = String(divider);
        this.operator2 = String(this.getRandom2To9()* divider) ;
        this.textInput.value ='';

        this.assesmentText = 'Напечатай результат и нажми Enter';

        this.textInput.focus();

        this.setState({
            operator1: this.operator1,
            operator2: this.operator2,
            assesmentText: this.assesmentText,
            inputValue: this.textInput,
            numberOfGoodAnswers: this.numberOfGoodAnswers,
            numberOfBadAnswers: this.numberOfBadAnswers,
            numberTotalAnsvers:this.numberTotalAnswers,
            isTestVisible: this.isTestVisible,
            isStartButtonVisible: this.isStartButtonVisible,
            tasksNumber:this.tasksNumber


        });
        //setTimeout(this.endOfTestTime.bind(this),Number(this.durationSec.value)*1000);
    }

    public endOfTestTime(): void{
        //this.isTestVisible = false;
        console.info('endOfTestTime(): ');
        this.isStartButtonVisible = true;
        this.isTimeForNextTask = false;
        this.setState({
            isStartButtonVisible: this.isStartButtonVisible

        });
    }



    public getRandom2To9():number{

        return Math.floor(Math.random()*8)+2;
        /*while(1===1){
         result= Math.floor(Math.random()*10 +1);

         if(result >=2 && result <10)
         return result;
         else
         continue;
         }*/

    }

    public getRandomFromArray(arrayToChooseFrom:number[]):number{
        console.log("array to choose operator1 is:"+arrayToChooseFrom.toString());
        let length:number = arrayToChooseFrom.length;
        // Math.floor(Math.random() * (max - min + 1)) + min;Returns a random integer between min (inclusive) and max (inclusive)
        let randomIndex = Math.floor(Math.random()* length);
        console.log("radomIndex = "+ randomIndex);
        return arrayToChooseFrom[randomIndex];
    }

    public setArrayForOperator1 (arrayToSet:number[]){
        this.arrayForOperator1 = arrayToSet;
    }

    public cbClickedFor2(){
        this.checkBoxSelectedFor2 = !this.checkBoxSelectedFor2;
        this.checkBoxesSelected[2] = this.checkBoxSelectedFor2;
        this.setState({checkBoxSelectedFor2: this.checkBoxSelectedFor2}
        )
    }
    public cbClickedFor3(){
        this.checkBoxSelectedFor3 = !this.checkBoxSelectedFor3;
        this.checkBoxesSelected[3] = this.checkBoxSelectedFor3;
        this.setState({checkBoxSelectedFor3: this.checkBoxSelectedFor3}
        )
    }
    public cbClickedFor4(){
        this.checkBoxSelectedFor4 = !this.checkBoxSelectedFor4;
        this.checkBoxesSelected[4] = this.checkBoxSelectedFor4;
        this.setState({checkBoxSelectedFor4: this.checkBoxSelectedFor4}
        )
    }

    public cbClickedFor5(){
        this.checkBoxSelectedFor5 = !this.checkBoxSelectedFor5;
        this.checkBoxesSelected[5] = this.checkBoxSelectedFor5;
        this.setState({checkBoxSelectedFor5: this.checkBoxSelectedFor5}
        )
    }
    public cbClickedFor6(){
        this.checkBoxSelectedFor6 = !this.checkBoxSelectedFor6;
        this.checkBoxesSelected[6] = this.checkBoxSelectedFor6;
        this.setState({checkBoxSelectedFor6: this.checkBoxSelectedFor6}
        )
    }
    public cbClickedFor7(){
        this.checkBoxSelectedFor7 = !this.checkBoxSelectedFor7;
        this.checkBoxesSelected[7] = this.checkBoxSelectedFor7;
        this.setState({checkBoxSelectedFor7: this.checkBoxSelectedFor7}
        )
    }
    public cbClickedFor8(){
        this.checkBoxSelectedFor8 = !this.checkBoxSelectedFor8;
        this.checkBoxesSelected[8] = this.checkBoxSelectedFor8;
        this.setState({checkBoxSelectedFor8: this.checkBoxSelectedFor8}
        )
    }
    public cbClickedFor9(){
        this.checkBoxSelectedFor9 = !this.checkBoxSelectedFor9;
        this.checkBoxesSelected[9] = this.checkBoxSelectedFor9;
        this.setState({checkBoxSelectedFor9: this.checkBoxSelectedFor9}
        )
    }


}