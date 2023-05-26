import { useDispatch } from 'react-redux';
import { AppDispatch } from '../services/reducers';
import { useSelector } from 'react-redux';
import { RootState } from '../services/reducers';
import { TypedUseSelectorHook } from 'react-redux';

type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
