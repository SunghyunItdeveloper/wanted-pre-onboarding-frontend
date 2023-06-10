import React from 'react'
import { ButtonContainer, ForgotPassword, HorizontalRule, InputContainer, LoginWith, MembershipContainer, MembershipWrap, WelcomeText } from '../signupPage/Membership.style'
import { StyledInput } from '../../api/components/common/input.style'

const Login = () => {
  return (
    <>
    <MembershipContainer>
    <MembershipWrap>
      <WelcomeText>로그인</WelcomeText>
    <InputContainer>
    <StyledInput type="text" placeholder="Email"/>
    <StyledInput type="password" placeholder="password"/>
    </InputContainer>
    <ButtonContainer>
      <button content="sign up">로그인</button>
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