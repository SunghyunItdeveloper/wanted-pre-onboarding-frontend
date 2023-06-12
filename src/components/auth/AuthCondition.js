import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

export const NeedpublicAuth = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const accessToken = localStorage.getItem('jwtToken')
    if (!accessToken) {
      alert('로그인을 해주셔야 이용가능합니다')
      navigate('/signin')
    }
  }, [navigate])
}

export const NeedAuth = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const accessToken = localStorage.getItem('jwtToken')
    if (accessToken) {
      navigate("/todos")
    }
  }, [navigate])
}