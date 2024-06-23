import React from 'react';
import { redirect, useNavigate } from 'react-router-dom';

const Main = () => {
    var logInName, logInPw;
    const nav = useNavigate();
    const idCheck = e => {
        if(e.target.name == 'name') {
        logInName = e.target.value;
        } else if (e.target.name == 'pw') {
        logInPw = e.target.value;
        }
        if (logInName == '홍채영'&&logInPw == '0607'){
        console.log('test1 pass');
        const open = new Date('2024-06-24');
        var t = new Date();
        
        if(t <= open){
            console.log('not yet');
            nav("/page");
        }
        //date()
        }
    }
    function date() {
        var t = new Date();
        console.log(t);
    }
    return(
        <div className="App">
      <header className="App-header">
        <form>
          <legend>Log in</legend>
            <div>
              이름: <input type='text' name='name' onChange={(e)=>idCheck(e)}/>
              <br />
              비밀번호: <input type='text' name='pw' onChange={(e)=>idCheck(e)}/>
            </div>
        </form>
        
      </header>
    </div>
    )
}
export default Main;