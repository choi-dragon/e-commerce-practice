import {createSelector} from 'reselect'

const selectDirectory=(state)=>{
    return state.directory
}

export const selectSessions=createSelector(
    [selectDirectory],
    (directory)=>{
        return directory.sections
    }
)