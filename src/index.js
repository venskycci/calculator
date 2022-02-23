import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Screen(props){
         return(
          <section id="pantalla">
                            <p id="salida">{props.value}</p>
          </section>
       )
}

function Button(props){
        return(
           <td>
               <input type="button" value={props.value} id={props.id} onClick={props.onClick} id={props.id}></input>
           </td>
          )
}

class Board extends React.Component {
        constructor(props){
           super(props);
             this.state={
               result:'0',
             };
        }

check_operation(x){
  let last=this.state.result.slice(-1);
  if((last==='/' || last==='+' || last==='-' || last==='*' || last==='.') && (x==='/' || x==='+' || x==='-' || x==='*' || x==='.')){
    return false;
    }
  else{
   return true;}
}
number_operatorClick(n){
    let operation=this.state.result.slice(); 
     if(operation.length<23 && this.check_operation(n)){	
      if(operation=='0' && (n=='/' || n=='+' || n=='-' || n=='*' || n=='.')){
        operation+=n; }
      else if(operation=='0' && !(n=='/' || n=='+' || n=='-' || n=='*' || n=='.')){
        operation=n; }
      else{
          operation+=n;
          }//update data
      this.setState({result:String(operation),});
      
       }
      else{
        
        
        this.setState({result:String(operation),});//update data
      }
    }

equal(n){
  let operation=this.state.result.slice();
  let last=this.state.result.slice(-1);
  if(last==='/' || last=='+' || last=='-' || last=='*'){
  operation=operation.substring(0,operation.length-1);
}
operation=eval(operation);
this.setState({result:String(operation),});//mostrar en pantalla
}

delete(n){
  let operation=this.state.result.slice();
  if(operation=='0' || operation.length==1){
   operation='0';
   this.setState({result:operation,});//mostrar en pantalla
  }
  else{
    operation=operation.substring(0,operation.length-1);
    this.setState({result:operation,});//mostrar en pantalla
   }
  }

initial(){
    this.setState({result:'0',});
   }

   render_init_Button(n){return <Button value={n} id={'operador'} onClick={()=>this.initial(n)}/>;}
render_delete_Button(n){return <Button value={n} id={'operador'}  onClick={()=>this.delete(n)}/>;}
render_equal_Button(n){return <Button value={n} id={'igual'} onClick={() =>this.equal(n)}/>;}
render_numb_Op_Button(n){return <Button value={n} onClick={() =>this.number_operatorClick(n)}/>;}
render_numb_Op_Button_color(n){return <Button value={n} id={'operador'} onClick={() =>this.number_operatorClick(n)}/>;}
     
    render(){
        return (
             <div id="cuerpo">
               <Screen value={this.state.result}/>
               <section id="separador">
					                   <div id="sep"></div>
				       </section>
              <table>
               
              <tbody>
               <tr>
                  {this.render_numb_Op_Button('7')}
                  {this.render_numb_Op_Button('8')}
                  {this.render_numb_Op_Button('9')}
                  {this.render_numb_Op_Button_color('/')}
                  
               </tr>
               <tr>
                  {this.render_numb_Op_Button('4')}
                  {this.render_numb_Op_Button('5')}
                  {this.render_numb_Op_Button('6')}
                  {this.render_numb_Op_Button_color('*')}
               </tr>
               <tr>
                  {this.render_numb_Op_Button('1')}
                  {this.render_numb_Op_Button('2')}
                  {this.render_numb_Op_Button('3')}
                  {this.render_numb_Op_Button_color('-')}
               </tr>
               <tr>
                  {this.render_numb_Op_Button('0')}
                  {this.render_equal_Button('=')}
                  {this.render_delete_Button('⇐')}
                  {this.render_numb_Op_Button_color('+')}
               </tr>
               <tr>
                  {this.render_init_Button('AC')}
                  {this.render_numb_Op_Button('.')}
               </tr>
              
              </tbody>
              
              </table>
               
             </div>
             
             );

        }

      }

class Calculator extends React.Component{
   render(){
     return(<div>
              <Board/>

           </div>
        );
  }
}

ReactDOM.render(<Calculator />,document.getElementById('root'));


