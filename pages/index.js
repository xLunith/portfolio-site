import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import React from 'react'
import { homedir } from 'os';
//李維安
const inputNameArr = ["Clickabl", "Clickab", "Clicka", "Click", "Clic", "Cli", "Cl", "C", "\n", "autoAndrei", "\n", "l", "li", "李", "李w", "李we", "李wei", "李維", "李維a", "李維an", "李維安", 
"李維安", "李維", "李", "\n", "autoA Programmer", "\n", "/", "/c", "/cl", "/cle", "/clea", "/clear", "/clear", "/clear"];

const nameAnimArr = [];

const linkArr = [["A", "Ab", "Abo", "Abou", "About"], ["P", "Pr", "Pro", "Proj", "Proje", "Projec", "Project", "Projects"], ["C", "Co", "Con", "Cont", "Conta", "Contac", "Contact"]];

function wordAutomation(){ //If 'auto' is in the beginning of an element in inputNameArr, this function will automate typing and erasing
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
}


class Home extends React.Component {
  constructor(props){
    super(props);
    //Declaring Refs
    this.name_ref = React.createRef();
    this.welcome_ref = React.createRef();
    this.about_ref = React.createRef();
    this.project_ref = React.createRef();
    this.contact_ref = React.createRef();
    this.cursor1_ref = React.createRef();
    this.cursor2_ref = React.createRef();
    this.cursor3_ref = React.createRef();
    this.cursor4_ref = React.createRef();

    this.nameAnim = () => {
      var speed = 125; // Speed of Animation typing
      var timer = 0; //Used to time different timeouts

      //Setting Refs
      var name = this.name_ref.current;
      var welcome = this.welcome_ref.current;
      var about = this.about_ref.current;
      var project = this.project_ref.current;
      var contact = this.contact_ref.current;
      var cursor1 = this.cursor1_ref.current; //Main cursor
      var cursor2 = this.cursor2_ref.current; //Link cursors
      var cursor3 = this.cursor3_ref.current;
      var cursor4 = this.cursor4_ref.current;

      const cursorList = [cursor2, cursor3, cursor4];

      name.style.pointerEvents = 'none';
      nameAnimArr.forEach((ele, ind) => {
          
        var timeoutHandle = setTimeout(function(){ //Sets name div to each element in nameAnimArr
          name.textContent = ele;
        }, speed*ind);   
      });
      timer += speed*nameAnimArr.length;

      setTimeout(function(){ //Clears all visible elements on the page
        name.textContent = "";
        welcome.textContent = "";
        about.textContent = "";
        project.textContent = "";
        contact.textContent = "";
        cursor1.style.visibility = 'hidden';

        about.style.fontSize = '10vh';
        project.style.fontSize = '10vh';
        contact.style.fontSize = '10vh';
      }, timer);
      timer += 500;

      setTimeout(function(){ //Makes cursor for About visible
        cursor2.style.visibility = 'visible';
      }, timer);
      
      linkArr[0].forEach((ele, ind) => { //Types out About
        setTimeout(function(){
          about.textContent = ele;
        }, (timer)+(speed*ind)); 
      });

      timer += speed*linkArr[0].length+500;

      setTimeout(function(){
        cursor2.style.visibility = 'hidden';
        cursor3.style.visibility = 'visible';
      }, timer);

      linkArr[1].forEach((ele, ind) => { //Types out About
        setTimeout(function(){
          project.textContent = ele;
        }, (timer)+(speed*ind)); 
      });
      
      timer += speed*linkArr[1].length+500;

      setTimeout(function(){
        cursor3.style.visibility = 'hidden';
        cursor4.style.visibility = 'visible';
      }, timer);

      linkArr[2].forEach((ele, ind) => { //Types out About
        setTimeout(function(){
          contact.textContent = ele;
        }, (timer)+(speed*ind)); 
      });

      timer += speed*linkArr[2].length+500;

      setTimeout(function(){
        cursor4.style.visibility = 'hidden';
      }, timer);

    }

    this.nameAnim = this.nameAnim.bind(this);
  }
  render(){
    wordAutomation();
    return (
    <>
      
      <div className="home-wrapper">
        <div className="navbar">
            <div className="name-row"><Link href=""><a ref={this.about_ref} className="montserrat slide-underline">About</a></Link><div className="nav-cursor montserrat blink" ref={this.cursor2_ref}>_</div></div>
            <div className="name-row"><Link href=""><a ref={this.project_ref} className="montserrat slide-underline">Projects</a></Link><div className="nav-cursor montserrat blink" ref={this.cursor3_ref}>_</div></div>
            <div className="name-row"><Link href=""><a ref={this.contact_ref} className="montserrat slide-underline">Contact</a></Link><div className="nav-cursor montserrat blink" ref={this.cursor4_ref}>_</div></div>
        </div>
        <div className="name-wrapper">
          
          <div className="welcome-text montserrat" ref={this.welcome_ref}>Hi, I'm</div>
          <div className="name-row">
            <div onClick={this.nameAnim} className="welcome-name montserrat" ref={this.name_ref}>Clickable</div>
            <div className="name-cursor montserrat blink" ref={this.cursor1_ref}>_</div>
          </div>
          
        </div>
      </div>
      <style jsx>{`
        .navbar{
          padding: 0vh;
          display: flex;
          justify-content: space-evenly;
        }


        .home-wrapper{
          width: 100%;
          height: 100%;
          display: contents;
        }
  
        .name-wrapper{
          width: 100%;
          margin-top: 20vh;
          padding-bottom: 15vh;
          display: grid;
          justify-items: center;
        }
  
        .name-row{
          display: flex;
          align-items: baseline;
          justify-content: center;
          width: -moz-available;
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

        .nav-cursor{
          visibility: hidden;
          font-size: 10vh;
        }

  
      
      `}</style>
      </>
    )
  }
  
}

export default Home;
