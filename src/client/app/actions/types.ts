import { ThunkDispatch } from 'redux-thunk'
import { GoGovReduxState } from '../reducers/types'
import { HomeActionType } from '../../home/actions/types'
import { RootActionType } from '../components/pages/RootPage/actions/types'
import { UserActionType } from '../../user/actions/types'
import { LoginActionType } from '../../login/actions/types'
import { DirectoryActionType } from '../../directory/actions/types'

export type GetReduxState = () => GoGovReduxState

export type AllActions =
  | UserActionType
  | RootActionType
  | LoginActionType
  | HomeActionType
  | DirectoryActionType

export interface ReduxAction<T extends string> {
  type: T
}

export interface HasPayload<P> {
  payload: P
}

export type ReduxPayloadAction<T extends string, P> = ReduxAction<T> &
  HasPayload<P>

export type AllThunkDispatch = ThunkDispatch<GoGovReduxState, void, AllActions>
