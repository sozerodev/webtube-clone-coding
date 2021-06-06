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

const logger = (req, res, next) => {
    // handler에는 다수의 handler를 사용할 수 있다. 
    // middleware는 작업을 다음 함수에게 넘기는 함수이다. 응답하는 함수가 아니라.
    // middleware는 필요한 만큼 만들 수 있다. 
    console.log(`${req.method} ${req.url}`);
    // return res.send("I have the power now!") // 이 코드가 요청을 중단시키기 때문에 밑의 next()..즉, handleHome은 호출되지 않는다.
    next();
}

const privateMiddleware = (req, res, next) => {
    // url을 확인해서 /protected와 같으면 중간에 개입하여 다른 함수를 호출하는 것을 막는다. 
    // url이 /protected가 아니라면 다음 함수인 next를 호출한다. 
    const url = req.url;
    if (url === "/protected"){
        return res.send("<h1>Not Allowed!</h1>")
    } 
    next();
    console.log("Allowed, you may continue.")
}



const handleHome = (req, res) => {
    // res.end() 는 요청을 종료
    // res.send()로도 종료 가능. 안에 메시지를 넣을 수 있다. 
    return res.send("<h1>i love middlewares</h1>");
}

// 모든 controller는 필요하다면 next를 포함하고 있지만, 마지막함수이기때문에 필수는 아니다.
const handleProtected = (req, res) => {
    return res.send("Welcome to the private lounge.")
}


// app.use는 global middleware를 만들 수 있게 해준다. 어느 url에도 적용하는!
app.use(logger) // 모든 route에서 이 함수를 사용하는 것. 
app.use(privateMiddleware);
app.get("/", handleHome); // logger가 실행된 후, 그 안의 next()가 호출되면서 handleHome이 호출된다. 
app.get("/protected", handleProtected)

const handleLogin = (req, res) => {
    return res.send({ message : "Login Here." })
}
app.get("/login", handleLogin)

const handleListening = () => 
    console.log(`Server listening on port on port http://localhost:${PORT} 🚀`)

app.listen(PORT, handleListening) // (포트번호, 콜백함수) 
    // this is much sexier..?
    // app.listen(4000, () => console.log("Server listening on port 4000 🚀"))



