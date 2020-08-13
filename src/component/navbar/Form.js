import React,{Component} from 'react';
import './style.css';

export default class Form extends Component {
    
    state={sortingOption:'null',length:10,position:'bottom',speed:'1x'}

    constructor(props){
        super(props);
    }
    
    render() { 
        return(
            <div className='form'>
                <select name='select-sort' value={this.state.sortingOption} onChange={(e)=>{e.preventDefault(); this.setState( {sortingOption:e.target.value}); this.props.sortingOption(e.target.value);}}>
                    <option value='null' disabled>Select sorting</option>
                    <option value='bubble'>Bubble Sort</option>
                    <option value='selection'>Selection Sort</option>
                    <option value='insertion'>Insertion Sort</option>
                    <option value='merge'>Merge Sort</option>
                    <option value='quick'>Quick Sort</option>
                </select>

                <select name='select-length' value={this.state.length} onChange={(e)=>{e.preventDefault(); this.setState( {length:e.target.value,sortingOption:'null'}); this.props.changeLength(e.target.value);}} className='value-selector'>
                    <option value='null' disabled>Number of element</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                    <option value={200}>200</option>
                    <option value={500}>500</option>
                    <option value={1000}>1000</option>
                   
                </select>

                <select name='select-position' value={this.state.position} onChange={(e)=>{e.preventDefault(); this.setState( {position:e.target.value}); this.props.changePosition(e.target.value);}}>
                <option value='' disabled>Select position</option>
                    <option value='bottom'>Bottom</option>
                    <option value='top'>Top</option>
                    <option value='middle'>Middle</option>
                    
                    
                </select>

                <select name='select-speed' value={this.state.speed} onChange={(e)=>{e.preventDefault(); this.setState( {speed:e.target.value}); this.props.changeSpeed(e.target.value);}}>
                <option value='' disabled>Select Speed</option>
                    <option value='1x'>1x</option>
                    <option value='1.5x'>1.5x</option>
                    <option value='2x'>2x</option>
                    <option value='5x'>5x</option>
                    
                </select>
                
                
                <button class='' onClick={(e)=>{e.preventDefault(); this.props.randomize(); this.setState({sortingOption:'null'}); }}>Randomize</button>
                <button class='' onClick={(e)=>{e.preventDefault(); this.setState({sortingOption:'null'}); this.props.changeLength(this.state.length)  }}>Reset</button> 
            </div>
        );
    }
}
 
