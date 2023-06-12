import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonContainer, ForgotPassword, HorizontalRule, InputContainer, LoginWith, MembershipContainer, MembershipWrap, WelcomeText } from './Membership.style';
import { StyledInput } from '../../components/common/input.style';
import axiosinstance from '../../api/AxiosInstance';
import { POST_SIGNUP } from '../../api/apiUrl';
import { NeedAuth } from '../../components/auth/AuthCondition';

const Membership = () => {
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

  const handleSignup = async () => {
    if (!email.includes('@') || password.length < 8) {
      setError(true);
    } else {
      try {
        const response = await axiosinstance.post(POST_SIGNUP, { email, password });
        if (response.status === 201) {
          console.log(response,'성공하였습니다')
          alert("회원가입이 완료되었습니다");
          navigate('/signin');
        } else {
          // 회원가입 실패 처리
        }
      } catch (error) {
        console.log(error,"실패하였습니다")
        alert('회원가입을 실패하였습니다.')
      }
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