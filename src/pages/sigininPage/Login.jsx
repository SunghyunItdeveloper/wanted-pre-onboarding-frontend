// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonContainer, ForgotPassword, HorizontalRule, InputContainer, LoginWith, MembershipContainer, MembershipWrap, WelcomeText } from '../signupPage/Membership.style';
import { StyledInput } from '../../components/common/input.style';
import axiosinstance from '../../api/AxiosInstance';
import { NeedAuth } from '../../components/auth/AuthCondition';

const Login = () => {
  NeedAuth()
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignin = async () => {
    if (!email.includes('@') || password.length < 8) {
      setError(true);
    } else {
      try {
        const response = await axiosinstance.post('auth/signin', {
          email,
          password,
        });
        
        const { access_token } = response.data;
        alert('로그인 성공하였습니다')
        console.log(response,'로그인성공')
    const  undefined1= localStorage.setItem('jwtToken', access_token);
      console.log(undefined1)    
    navigate('/todo');
      } catch (error) {
        setError(true);
        console.error('로그인 실패:', error);
        alert('비밀번호와 아이디를 확인해주세요')
      }
    }
  };

  return (
    <>
      <MembershipContainer>
        <MembershipWrap>
          <WelcomeText>로그인</WelcomeText>
          <InputContainer>
            <StyledInput
              type="text"
              placeholder="이메일"
              value={email}
              onChange={handleEmailChange}
              data-testid="email-input"
            />
            <StyledInput
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={handlePasswordChange}
              data-testid="password-input"
            />
          </InputContainer>
          <ButtonContainer>
            <button
              content="로그인"
              onClick={handleSignin}
              data-testid="signin-button"
              disabled={!email.includes('@') || password.length < 8}
            >
              로그인
            </button>
          </ButtonContainer>
          <LoginWith onClick={()=>{
            navigate('/signup')
          }}>회원 가입</LoginWith>
          <HorizontalRule />
          <ForgotPassword>비밀번호를 잊어버리셨나요?</ForgotPassword>
        </MembershipWrap>
      </MembershipContainer>
    </>
  );
};

export default Login;