// 꼭 index.js가 될 필요는 없다. 
// 첫 express application을 만들어보자.

import express from "express";

// express application 생성!
const app = express();

// app은 request(요청)를 listen할 수 있어야 한다. 
// callback..은 button이 있을 때 button.addEventListener("click", handleClick)에서 
// handleClick은 버튼이 클릭됐을 때 호출되는 함수.
// callback은 기본적으로 서버가 시작될 때 작동하는 함수이다. 
// callback을 작성 전에 서버에게 어떤 Port를 listening할 지 얘기해주어야 한다. 
// port는 컴퓨터의 문이나 창문같은 것. 


const handleListening = () => console.log("Server listening on port 4000 🚀")
app.listen(4000, handleListening) // (포트번호, 콜백함수) 
    // this is much sexier..?
    // app.listen(4000, () => console.log("Server listening on port 4000 🚀"))





