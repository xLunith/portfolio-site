import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react'
import { homedir } from 'os';
//李維安
const inputNameArr = ["Clickabl", "Clickab", "Clicka", "Click", "Clic", "Cli", "Cl", "C", "\n", "autoAndrei", "\n", "l", "li", "李", "李w", "李we", "李wei", "李維", "李維a", "李維an", "李維安", 
"李維安", "李維", "李", "\n", "autoA Programmer", "\n", "/", "/c", "/cl", "/cle", "/clea", "/clear", "/clear", "/clear"];

const nameAnimArr = [];

function wordAutomation(){
  inputNameArr.forEach((ele, ind) => {
    if(ele.substring(0, 4) == "auto"){
      var originalEle = ele.slice(4);
      var newEle;
      var count = 0;
      for(var i = 0; i<originalEle.length; i++){
        newEle = originalEle.slice(0, i+1);
        nameAnimArr.push(newEle);
      }
      for(var i = originalEle.length; i>=0; i--){
        newEle = originalEle.slice(0, i);
        nameAnimArr.push(newEle);
      }
    }
    else{
      nameAnimArr.push(ele);
    }
  });
  console.log(nameAnimArr);
}


class Home extends React.Component {
  constructor(props){
    super(props);
    this.name_ref = React.createRef();
    this.welcome_ref = React.createRef();

    this.nameAnim = () => {
      var speed = 125;
      var name = this.name_ref.current;
      var welcome = this.welcome_ref.current;
      nameAnimArr.forEach((ele, ind) => {
          
        var timeoutHandle = setTimeout(function(){
          name.textContent = ele;
          console.log(ele)
        }, speed*ind);   
        
      });

      setTimeout(function(){
        name.textContent = "";
        welcome.textContent = "";
      }, speed*nameAnimArr.length);
      
      
    }

    this.nameAnim = this.nameAnim.bind(this);
  }
  render(){
    wordAutomation();
    return (
      <div className="home-wrapper">
        <div className="name-wrapper">
          <div className="welcome-text montserrat" ref={this.welcome_ref}>Hi, I'm</div>
          <div className="name-row">
            <div onClick={this.nameAnim} className="welcome-name montserrat" ref={this.name_ref}>Clickable</div>
            <div className="name-cursor montserrat blink">_</div>
          </div>
          
        </div>
        
        <style jsx>{`
        .home-wrapper{
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
  
        }
  
        .name-wrapper{
          width: 100%;
          padding-bottom: 15vh;
          display: grid;
          justify-items: center;
        }
  
        .name-row{
          display: flex;
          align-items: baseline;
        }
  
        .welcome-text{
          font-size: 10vh;
          margin-bottom: 5vh;
          
        }
  
        .welcome-name{
          text-align: center;
          font-size: 10vh;
        }
  
        .name-cursor{
          font-size: 10vh;
          padding-left: 10px;
          
        }
  
      
      `}</style>
      </div>
    )
  }
  
}

export default Home;
