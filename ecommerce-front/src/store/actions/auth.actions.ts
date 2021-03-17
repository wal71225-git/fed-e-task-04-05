export const SIGNUP = 'SIGNUP'
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_FAIL = 'SIGNUP_FAIL'

export interface SignUpPayload {
  name: string,
  email: string,
  password: string
}
export interface SignUpAction {
  type: typeof SIGNUP,
  payload: SignUpPayload
}
export interface SignUpSuccessAction {
  type: typeof SIGNUP_SUCCESS
}
export interface SignUpFailAction {
  type: typeof SIGNUP_FAIL,
  message: string
}
export const signup = (payload: SignUpPayload) => ({
  type: SIGNUP,
  payload
})
export const signupSuccess = () => ({
  type: SIGNUP_SUCCESS
})
export const signupFail = (message: string) => ({
  type: SIGNUP_FAIL,
  message
})

export type AuthUnionType = SignUpAction | SignUpSuccessAction | SignUpFailAction