import React, { useState } from 'react'
import { ButtonContainer, ForgotPassword, HorizontalRule, InputContainer, LoginWith, MembershipContainer, MembershipWrap, WelcomeText } from '../signupPage/Membership.style'
import { StyledInput } from '../../components/common/input.style'
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const LoginEmailChange = (e) =>{
    setEmail(e.target.value)
  }
  const LoginPassWordChange = (e) =>{
    setPassword(e.target.value)
  } 
  const handleSignin = () => {
    if (!email.includes('@') || password.length < 8) {
      setError(true);
    } else {
      // 로그인 로직을 여기에 작성하세요.
      // 로그인이 성공적으로 완료되면 JWT를 로컬 스토리지에 저장하고 /todo 경로로 리다이렉트합니다.
      const jwtToken = '여기에 JWT 토큰을 저장하세요';
      localStorage.setItem('jwtToken', jwtToken);
      navigate('/todo');
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
    onChange={LoginEmailChange}
    data-testid="email-input"
      />
    <StyledInput 
    type="password"
    placeholder="비밀번호"
    value={password}
    onChange={LoginPassWordChange}
    data-testid="password-input"
    />
    </InputContainer>
    <ButtonContainer>
      <button 
        content="로그인"
        onClick={handleSignin}
        data-testid="signin-button"
              disabled={!email.includes('@') || password.length < 8}
        >로그인</button>
    </ButtonContainer>
    <LoginWith>Or 간편로그인</LoginWith>
    <HorizontalRule/>
    <ForgotPassword>비밀번호를 잊어버리셨나요 ?</ForgotPassword>
    </MembershipWrap>
    </MembershipContainer>
    </>
  )
}

export default Login