import React,{Component} from 'react';
import './style.css';

export default class Bar extends Component {
    state={height:0}
    
    componentDidMount=()=>{
        
    }
    
    render() {
        let color='green';

        if( (this.props.height)>=0 && (this.props.height)<=10 ){
            color='Orange';
        }else if((this.props.height)>10 && (this.props.height)<=20 ){
            color='DodgerBlue';
        }else if((this.props.height)>20 && (this.props.height)<=30 ){
            color='MediumSeaGreen';
        }
        else if((this.props.height)>20 && (this.props.height)<=30 ){
            color='sienna';
        }
        else if((this.props.height)>30 && (this.props.height)<=40 ){
            color='SlateBlue';
        }
        else if((this.props.height)>40 && (this.props.height)<=50 ){
            color='Violet';
        }
        else if((this.props.height)>60 && (this.props.height)<=70 ){
            color='yellow';
        }
        else if((this.props.height)>70 && (this.props.height)<=80 ){
            color='saddlebrown';
        }
        else if((this.props.height)>80 && (this.props.height)<=90 ){
            color='greenyellow';
        }
        else if((this.props.height)>90 && (this.props.height)<=100 ){
            color='magenta';
        }

        return(
        <div className='bar' style={{height:this.props.height*3,backgroundColor:color}} >
            
        </div>
        );
    }
}