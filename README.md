## 안성현

---

## 폴더구조

```markdown
.
├── App.js
├── api
│   ├── api.js                     //Todo CRUD 설정
│   ├── authurl.js                 // AUTHURL
│		├── Axiosinstance.js           // baseURL,header
│   └── constant.js                // APIURL주소
├── components
│		├── auth
│   └── AuthCondition.js           // 로그인 예외처리
├── Pages                    
│   ├── signIn
│   │   ├── Login.jsx
│   │   │                           // 로그인페이지
│   ├── signUp
│   │   ├── Membership.style.js
│   │   └── Membership.jsx          // 회원가입페이지
│   └── todos
│       ├── Todos.style.js
│       └── Todos.jsx               // todolist페이지
├── APP.js
├── styles
│   └── globalStyles.js             //스타일
		└── common
       └── input.style.js
```

---

## 기능 시연 영상

![](https://velog.velcdn.com/images/ash5541/post/9a8e752e-3fe1-43a7-a050-001a4f9c9481/image.gif)


- 회원가입과 로그인 페이지에 이메일과 비밀번호의 유효성 검사기능을 구현해주세요
    - 이메일 조건: `@` 포함
    - 비밀번호 조건: 8자 이상
- 입력된 이메일과 비밀번호가 유효성 검사를 통과하지 못한다면 button에 `disabled` 속성을 부여
- 회원가입 페이지에서 버튼을 클릭 시 회원가입을 진행하고 회원가입이 정상적으로 완료되었을 시 `/signin` 경로로 이동
- 로그인 페이지에서 버튼을 클릭 시, 로그인을 진행하고 로그인이 정상적으로 완료되었을 시 `/todo` 경로로 이동
    - 로그인 API는 로그인이 성공했을 시 Response Body에 JWT를 포함해서 응답합니다.
    - 응답받은 JWT는 로컬 스토리지에 저장

---

![](https://velog.velcdn.com/images/ash5541/post/0cd3070f-fa6e-416a-af47-e9f142ee7cba/image.gif)


**예외상황에 대한 처리를 함**

![](https://velog.velcdn.com/images/ash5541/post/2d20de93-efff-4992-88ea-4bff13a3a1d8/image.gif)


### 리다이렉트

- `/todo`경로에 접속하면 투두 리스트의 목록을 볼 수 있도록 구현
- 목록에서는 TODO의 내용과 완료 여부가 표시되어야 합니다.
- TODO는 `<li>` tag를 이용해 감싸주세요

```markdown
<li>
  <label>
    <input type="checkbox" />
    <span>TODO 1</span>
  </label>
</li>
<li>
  <label>
    <input type="checkbox" />
    <span>TODO 2</span>
  </label>
</li>
```

- 리스트 페이지에 새로운 TODO를 입력할 수 있는 input과 추가 button을 만들어줌
    - TODO 입력 input에는 `data-testid="new-todo-input"` 속성을 부여함
    - TODO 추가 button에는 `data-testid="new-todo-add-button"` 속성을 부여함
        
        `<input data-testid="new-todo-input" />
        <button data-testid="new-todo-add-button">추가</button>`
        
- TODO의 체크박스를 통해 완료 여부를 수정
- TODO 우측에 수정버튼과 삭제 버튼

- 투두 리스트의 삭제 기능
    - 투두 리스트의 TODO 우측의 삭제버튼을 누르면 해당 아이템이 삭제

### 

- 투두 리스트의 수정 기능을 구현해주세요
    - TODO 우측의 수정 버튼을 누르면 수정모드가 활성화
    - 수정모드에서는 TODO의 내용을 변경.
    - 수정모드에서는 TODO의 내용이 input창 안에 입력된 형태로 변경완료
    - 수정모드에서는 TODO의 우측에 제출버튼과 취소버튼이 표시
    - 제출버튼을 누르면 수정한 내용을 제출해서 내용이 업데이트
    - 취소버튼을 누르면 수정한 내용을 초기화 하고, 수정모드를 비활성화함
    - CRUD 조건에 맞추었음
        
        ```markdown
        `<input data-testid="modify-input" />
        <button data-testid="submit-button">제출</button>
        <button data-testid="cancel-button">취소</button>`
        ```
        

![](https://velog.velcdn.com/images/ash5541/post/f7573219-e690-4448-9187-93ea23059480/image.gif)


## 사용한 라이브러리

```json
		"axios": "^1.4.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.12.1",
    "react-scripts": "5.0.1",
    "styled-components": "^5.3.10",
```

## 프로젝트 실행

## npm start && npm install
