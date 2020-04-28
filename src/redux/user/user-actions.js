// this creates Action
//redux flow
// Action --> Reducer --> Store --> DOM changes

export const setCurrentUser=user=>{
    return {type:'SET_CURRENT_USER',
payload:user} // "type" MUST match with one of the cases in user-reducer
}