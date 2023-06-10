import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonContainer, ForgotPassword, HorizontalRule, InputContainer, LoginWith, MembershipContainer, MembershipWrap, WelcomeText } from './Membership.style';
import { StyledInput } from '../../components/common/input.style';

const Membership = () => {
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

  const handleSignup = () => {
    if (!email.includes('@') || password.length < 8) {
      setError(true);
    } else {
      alert("회원가입이 완료되었습니다")
      // 회원가입 로직을 여기에 작성하세요.
      // 회원가입이 성공적으로 완료되면 /signin 경로로 리다이렉트합니다.
      navigate('/signin');
    }
  };

  

  return (
    <>
      <MembershipContainer>
        <MembershipWrap>
          <WelcomeText>회원가입</WelcomeText>
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
              content="회원가입"
              onClick={handleSignup}
              data-testid="signup-button"
              disabled={!email.includes('@') || password.length < 8}
            >
              회원가입 완료
            </button>
          </ButtonContainer>
          <LoginWith>또는 간편로그인</LoginWith>
          <HorizontalRule />
          <ForgotPassword>비밀번호를 잊어버리셨나요?</ForgotPassword>
        </MembershipWrap>
      </MembershipContainer>
    </>
  );
};

export default Membership;