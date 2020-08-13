import React,{Component} from 'react';
import './style.css';
import Bar from './bar/bar';

export default class List extends Component {
    
    showList=()=>{
        let array = [];
        
        return array = this.props.list.map(height=>{
            return(<Bar height={height} ></Bar>);
        });
    }

    componentDidMount=()=>{
        
    }

    render() { 
        return(
            <div className='list' style={{alignItems : this.props.position}}> 
                {this.showList()}
            </div>
        );
    }
}
 
