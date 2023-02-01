import axios from "axios";


const userActions ={
    userSignUp: (userData) => {
        return async (dispatch, getState) => {
            const res = await axios.post('https://backend-aesthetics.up.railway.app/api/signUp', {userData})
            dispatch({
                type: 'message',
                payload: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
            })
        }
    },
    userSignIn: (userLogin) => {
        return async (dispatch, getState) => {
            const res = await axios.post('https://backend-aesthetics.up.railway.app/api/signIn', {userLogin})
            
            if(res.data.success) {
                localStorage.setItem('token',res.data.response.token)
                dispatch({
                    type: 'user',
                    payload: res.data.response.userData
                })
                dispatch({
                    type: 'message',
                    payload: {
                        view: true,
                        message: res.data.message,
                        success: res.data.success
                    }
                })
            } else {
                dispatch({
                    type: 'message',
                    payload: {
                        view: true,
                        message: res.data.message,
                        success: res.data.success
                    }
                })
            }
        } 
      },
      signOutUser: (closeUser) => {
        return async (dispatch, getState) => {
            await axios.post('https://backend-aesthetics.up.railway.app/api/signOut',{closeUser})
            localStorage.removeItem('token')
            dispatch({
                type: 'user',
                payload: null,
                
            })
        }
    },
    verifyToken: (token) => {
        return async (dispatch, getState) => {
            const user = await axios.get('https://backend-aesthetics.up.railway.app/api/verifyToken', {headers: {'Authorization': 'Bearer '+token}} )
            if (user.data.success) {
                dispatch({
                    type: 'user',
                    payload: user.data.response
                })
                dispatch({
                    type: 'message',
                    payload: {
                        view: true,
                        message: user.data.message,
                        success: user.data.success
                    }
                })
            } else {
                localStorage.removeItem('token')
            }
        }
    },

    cleanMessage: () => {
        return async (dispatch, getState) => {
          try {
            const res = {data: { message: '' } }
            dispatch({
              type: 'MESSAGE',
              payload: {
                // view: true,
                message: res.data.message
                // success: true
              }
            });
            return res;
          }
          catch(error) {
            console.log(error)
          }
        }
      }
      
}

export default userActions