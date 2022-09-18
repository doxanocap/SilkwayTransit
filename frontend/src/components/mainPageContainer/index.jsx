import React from "react";
import "./index.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import {useNavigate} from 'react-router-dom';
import { useState } from "react";


const MainPageContainer = ({CurrentUsersName,id,type}) => {
    const [isDone, setIsDone]= useState(false); 
    const navigate = useNavigate();
    const [first, setFirst] = useState(false);
    const [second, setSecond] = useState(false);
    
    const next = () => {
        if (isDone===true && first == true && second === true){
            navigate("/tracking");
            window.location.reload();
        } else {
          alert("Wait!")
        }
    }

    const arrived = () => { 
      const bc = document.getElementById('card1');
      if (first === false) {
        bc.style.backgroundColor = 'green';
        setFirst(true)
      } else {
        bc.style.backgroundColor = 'white';
        setFirst(false)
      }
    }

    const go = () => {
      const bc = document.getElementById('card3');
      const nextB = document.getElementById("nextB");
      console.log(first, second);
      if (first === true && second === false) {
        bc.style.backgroundColor = 'green';
        setIsDone(true);
        setSecond(true)
        setFirst(true)
        nextB.style.backgroundColor = 'blue'; 
      } else if (first === false && second === false) {
        alert("Wait!")
      } else { 
        bc.style.backgroundColor = 'white';
        setSecond(false);
        setIsDone(false);
        nextB.style.backgroundColor = 'white'; 
      } 
    }
    
    // ЕСЛИ АПРУВ МЕДОСМОТР ТО     const bc = document.getElementById('card2');
    //    bc.style.backgroundColor = 'green';
    let text;
    // if (typeof(CurrentUsersName) === "string" && CurrentUsersName.length > 0) {
        text = (
            <h2 className="MainPageContainer-upperLarge-h1">Здравствуйте, {CurrentUsersName}! Задания на сегодня:</h2>
        )
    return (
        <div className="MainPageContainer">
             {text}
            <div className="MainPageContainer-upperLarge">
           
                
                <div className="CardContainer">
                    {/* <div className="cardmargin"> */}
            <Card style={{ width: '30rem' }}>
      <Card.Body className="card" id="card1">
        <Card.Title>Вы прибыли в депо?</Card.Title>
        <Card.Text>
          Отправьте запрос о прибытие в депо. Затем, дождитесь подверждения о вашем прибытие в депо.
        </Card.Text>
      
        <Button variant="primary" className = "buttonCard" onClick={arrived}>Прибыл в депо.</Button>
  
      </Card.Body>
    </Card>
    <Card style={{ width: '30rem' }}>
      <Card.Body className="card" id="card2">
        <Card.Title>Прохождение медосвидетельства.</Card.Title>
        <Card.Text>
          После того, как ваш запрос о прибытие потвержден. Запрос об успешном прохождении медосмотра отправляется автоматически. Ожидайте потверждение.
        </Card.Text>
        <Button variant="basic" className = "buttonCard" disabled="disabled">Запрос будет отправлен автоматически.</Button>
       
        
        
      </Card.Body>
    </Card>
    <Card style={{ width: '30rem' }}>
    <div className="drop">
      <Card.Body className="card" id="card3">
        <Card.Title>Принятие вагона.</Card.Title>

    

   
        <Dropdown className = "dropDown">
      <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
        Номер вагона
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item  id="train001">Train001</Dropdown.Item>
        <Dropdown.Item href="#/action-2" id="train002">Train002</Dropdown.Item>
        <Dropdown.Item href="#/action-3" id="train003">Train003</Dropdown.Item>
        <Dropdown.Item href="#/action-4" id="train004">Train004</Dropdown.Item>
        <Dropdown.Item href="#/action-5" id="train005">Train005</Dropdown.Item>
        <Dropdown.Item href="#/action-6" id="train006">Train006</Dropdown.Item>
        <Dropdown.Item href="#/action-7" id="train007">Train007</Dropdown.Item>
        <Dropdown.Item href="#/action-8" id="train008">Train008</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>


    <Dropdown className = "dropDown">
      <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
        Станция отбытия
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>


    <Dropdown className = "dropDown">
      <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
        Станция прибытия
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  


        <Button variant="primary" className = "buttonCard" onClick={go}>Отправить запрос</Button>
      </Card.Body>
      </div>
    </Card>
    </div>
    </div>
        <section className="margint">
        <Button variant="secondary" size="lg" onClick={next} id="nextB"> Перейти к маршруту  </Button>
        </section>
    </div>
    )
};

export default MainPageContainer;

