// 꼭 index.js가 될 필요는 없다. 
// 첫 express application을 만들어보자.

import express from "express";

const PORT = 4000;

// express application 생성!
const app = express();

// app은 request(요청)를 listen할 수 있어야 한다. 
// callback..은 button이 있을 때 button.addEventListener("click", handleClick)에서 
// handleClick은 버튼이 클릭됐을 때 호출되는 함수.
// callback은 기본적으로 서버가 시작될 때 작동하는 함수이다. 
// callback을 작성 전에 서버에게 어떤 Port를 listening할 지 얘기해주어야 한다. 
// port는 컴퓨터의 문이나 창문같은 것. 

// application을 만든 후... 이 다음부터 application설정을 한다.
// 어떻게 get request에 응답할 지. 
// request : 유저가 뭔가를 요청, 보내거나, 행동을 하는 것.
// respond 

// 콜백함수는 inline function으로
// 콜백함수부분엔 반드시 '함수'를 보내주어야 한다. 

// request, respond를 의미하는 두 개의 파라미터가 있어야 한다. 
// 이 requests, response는 express로부터 받는다.
const handleHome = (req, res) => {
    return res.send("i love you");
}
app.get("/", handleHome)

const handleLogin = (req, res) => {
    return res.send("Login Here.")
}
app.get("/login", handleLogin)

const handleListening = () => 
    console.log(`Server listening on port on port http://localhost:${PORT} 🚀`)

app.listen(PORT, handleListening) // (포트번호, 콜백함수) 
    // this is much sexier..?
    // app.listen(4000, () => console.log("Server listening on port 4000 🚀"))





