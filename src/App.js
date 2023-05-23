import React, { useState } from 'react';
import './App.css';
import { Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap';
import profilePic from './profilePic.png';
import Questions from './questions';
import { Routes,Route } from 'react-router-dom';
import styled from 'styled-components'

function App() {

  // 질문 
  let [questions,setQuestions] = useState(['질문1', '질문2']);

  let LoginBtn = styled.button`
    background:  rgb(183, 208, 212);
    margin : 5px;
    padding : 5px;
    border-radius : 15px;
    float:right;
    `;

  let AsknaLogo = styled.h1`
    float:left;
    font-family: 'Tourney', cursive;
    margin : auto;

  `

  return (
      <div className="App" >
        <div style={{backgroundColor:'white', display:'block'}}>
          <div className='Main'>
            <AsknaLogo>Askna</AsknaLogo>
            <LoginBtn>로그인</LoginBtn>
            <div style={{clear:'both'}}></div>
            </div>
        </div>

        
          <div className='Main'>
                  <Profile/>
          </div>

                <div className='Main' style={{padding:'20px'}}>
                  <Ask setQuestions={setQuestions}/>
                </div>
                <Questions questions={questions} />
        
      </div>
  );
}


function Profile() {


  let Container = styled.div`
    padding:20px;
  `;

  let ProfileMsg = styled.div`
    text-align:left;
    padding-left:20px;
  `

  return (
  


    <div>
  
    <Container>
      <Row className="justify-content-md-center">
        <Col xs ="6" md="3">      
        <div style={{padding:'10px'}}>  
          <img className='profile-img' src={profilePic}></img>          
        </div>
        </Col>
        <Col xs = "6" md="9">
            <div style={{textAlign:'left', padding:'10px'}}>
              <p>이름 : 박상일</p>
              <p>학교 : 숭실대학교</p>
              <p>전공 : 컴퓨터학부</p>
            </div>
        </Col>
      </Row>
      <ProfileMsg>
        Soon it shall also come to pass
      </ProfileMsg>
    </Container>
    </div>

    


  )
}

// styled-input은 focus를 잃어버리게 할 수 있음
const AskInput = styled.input`
width: 80%;
border-style:solid;
border-radius: 10px;
border-color:rgb(183, 208, 212);   
margin-right:5px;
padding:5px;
`

function Ask(props) {

  let [input, setInput] = useState('');
  let AskBtn = styled.button`
   background-color: rgb(183, 208, 212);
   border-radius: 30px;   
    `;
 

  return(
    <div>
      
      <AskInput placeholder="질문을 입력하세요" onChange={
      (e)=>{
        // 입력 값이 바뀔 때마다 실행
        setInput(e.target.value);
      }
    }></AskInput>
    <AskBtn onClick={
      (e)=>{
        props.setQuestions([]);
      }
    }>ask</AskBtn>
    </div>
  )
}




export default App;
