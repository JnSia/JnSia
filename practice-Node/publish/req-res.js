/*
    req.app: req 객체를 통해 app 객체에 접근할 수 있음
    req.body: body-parser 미들웨어가 만드는 요청의 본문을 해석한 객체
    req.cookies: cookie-parser 미들웨어가 만드는 요청의 쿠키를 해석한 객체
    req.ip: 요청의 ip 주소가 담겨 있음
    req.params: 라우트 매개변수에 대한 정보가 담긴 객체
    req.query: query string에 대한 정보가 담긴 객체
    req.signedCookies: 서명된 쿠키들은 req.cookies 대신 여기에 담김
    req.get(header name): 헤더의 값을 가져오고 싶을 때 사용하는 method
*/

/*
    res.app: res 객체를 통해 app 객체에 접근할 수 있음
    res.cookie(key, value, option): 쿠키를 설정하는 method
    res.clearCookie(key, value, option): 쿠키를 제거하는 method

    res.end(): 데이터 없이 응답을 보냄
    res.json(JSON): JSON 형식의 응답을 보냄
    res.redirect(address): redirect할 주소와 함께 응답을 보냄
    res.render(view, data): 다음 절에서 다룰 템플릿 엔진을 렌더링하여 응답할 때 사용하는 method
    res.send(data): 데이터와 함께 응답을 보냄
    res.sendFile(route): 경로에 위치한 파일을 응답

    res.set(header, value): 응답의 헤더를 설정
    res.status(code): 응답 시의 HTTP 상태 코드를 지정

        method chaining 사용 가능
        응답은 한 번만 가능
*/
