import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './component/navbar/Form';
import Footer from './component/footer/Footer';
import List from './component/List/Element';

export default class App extends React.Component{
  state={array:[],length:10,barPosition:'flex-end',speed:10,mergeSpeed:10}
  
  changeLength=(length)=>{
    this.setState({length:length},()=>{
      this.initArray();
    })
  }

  changeSpeed=(speed)=>{
    if(speed==='1x'){
      this.setState({speed:10});
    }
    else if(speed==='1.5x'){
      this.setState({speed:7.5});
    }
    else if(speed==='2x'){
      this.setState({speed:5});
    }
    else if(speed==='5x'){
      this.setState({speed:1});
    }
  }

  changePosition=(pos)=>{
    if(pos==='top'){
      this.setState({barPosition:'flex-start'});
    }else if(pos==='middle'){
      this.setState({barPosition:'center'});
    }else if(pos==='bottom'){
      this.setState({barPosition:'flex-end'});
    }
  }

  randomize=async ()=>{
    let list = [];
    for(let i=0;i<this.state.length;i++){
      list.push( Math.floor(Math.random()*100));
    }
    this.setState({array:list});
  }

  changeArray=(array,cb)=>{
    this.setState({array});
  }

  timer=(ms)=>{
    return new Promise(res=>setTimeout(res,this.state.speed));
  }

  timerMerge=(ms)=>{
    return new Promise(res=>setTimeout(res,this.state.speed));
  }
  

  mergeSort= async (array) =>{
    var n = array.length, a0 = array, a1 = new Array(n);
    for (var m = 1; m < n; m <<= 1) {
      for (var i = 0; i < n; i += m << 1) {
            var left = i,
            right = Math.min(i + m, n),
            end = Math.min(i + (m << 1), n);
            this.merge(a0, a1, left, right, end);      
            await this.timerMerge(10);
            this.changeArray(a0)      
      }
      await this.timerMerge(10);
      this.changeArray(a0)
      i = a0; a0 = a1; a1 = i;
    }
    
    if (array === a1) {
      for (var i = 0; i < n; ++i) {
        array[i] = a0[i];
      }
    } 
    await this.timerMerge(10);
    this.changeArray(array)
    
  }
  
 merge=(a0, a1, left, right, end)=>{
    for (var i0 = left, i1 = right; left < end; ++left) {
      if (i0 < right && (i1 >= end || a0[i0] <= a0[i1])) {
        a1[left] = a0[i0++];
      } else {
        a1[left] = a0[i1++];
      }
    }
  }
  

 partition = async ( list,low,high)=> 
  {   
    let pivot = list[high];     
    let i = (low - 1);  
  
    for (let j=low;j<=high-1;j++) 
    { 
        if (list[j] < pivot) 
        { 
            i++; 
            let temp = list[i];
            list[i]=list[j];
            list[j]=temp; 
            await this.timer(10);
            this.changeArray(list)
        } 
    } 
    let temp = list[i+1];
    list[i+1]=list[high];
    list[high]=temp;
    await this.timer(10);
    this.changeArray(list);
    
    return (i + 1); 
  } 
 
 quickSort= async (list,low,high)=>{
  if (low < high) 
  {  
      let pi = await this.partition(list, low, high);  
      await this.quickSort(list, low, pi - 1); 
      await this.quickSort(list, pi + 1, high); 
  } 
 }

 insertionSort=async ()=>{
   let list = [];
   list= this.state.array;
   let length = list.length;
   for(let i=1;i<length;i++){
    let j=i-1;
    let key = list[i];
    while(j>=0 && list[j]>key) {
      list[j+1]=list[j];
      await this.timer(10);
      this.changeArray(list);
      j=j-1;

    }
    list[j+1]=key;
    await this.timer(10);
    this.changeArray(list);
   }
  }

  bubbleSort=async()=>{
    let list=this.state.array;
    let length=this.state.length;
    
    for(let i=0;i<length;i++){
      for(let j=0;j<length-i-1;j++){
        
        if(list[j]>list[j+1]){
          let temp = list[j];
          list[j]=list[j+1];
          list[j+1]=temp;
          await this.timer(10);
          this.changeArray(list);
        }

      }
    }
  }

  selectionSort=async()=>{
    let list=this.state.array;
    let length=this.state.length;
    
    for(let i=0;i<length;i++){
      for(let j=i+1;j<length;j++){
        
        if(list[i]>list[j]){
          let temp = list[i];
          list[i]=list[j];
          list[j]=temp;
          await this.timer(10);
          this.changeArray(list);
        }

      }
    }
  }

  sortingOption=(option)=>{
      if(option==='bubble'){
        this.bubbleSort();
      }else if(option==='selection'){
        this.selectionSort();
      }else if(option==='merge'){
        let list = this.state.array;
        let sorted = this.mergeSort(list);
        
      }else if(option==='insertion'){
        this.insertionSort();
      }else if(option==='quick'){
        let high = this.state.length-1;
        let low = 0;
        let list = this.state.array;
        this.quickSort(list,low,high);
      }
  } 

  initArray=()=>{
    let list = [];
      for(let i=0;i<this.state.length;i++){
        list.push( Math.floor(Math.random()*100));
      }
      this.setState({array:list});
  }

  componentDidMount=()=>{
      this.initArray();
  }
  
  render(){
    return(<div className='container'>
        <Form changeLength={this.changeLength} changeSpeed={this.changeSpeed} changePosition={this.changePosition} randomize={this.randomize} sortingOption={this.sortingOption}></Form>
        <List list={this.state.array} position={this.state.barPosition}></List>
        <Footer></Footer>
    </div>)
  }
}