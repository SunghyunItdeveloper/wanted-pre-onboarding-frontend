import { useParams } from "react-router-dom"

const { id } = useParams
// auth 
export const POST_SIGNUP = "auth/signup"
export const POST_SIGNIN = "auth/signin"

//TODO
export const POST_CREATETODO = "/todos"
export const GET_GETTODO = "/todos"
export const PUT_UPDATETODO = `/todos/:${id}`
export const DELETE_DELETETODO = `/todos/:${id}`
