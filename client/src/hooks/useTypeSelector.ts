import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { AppState } from '../store';

export const useTypeSelector: TypedUseSelectorHook<AppState> = useSelector;
