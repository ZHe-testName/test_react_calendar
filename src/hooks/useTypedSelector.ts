import { RootStateType } from './../store/store';
import { TypedUseSelectorHook, useSelector } from "react-redux";

//custom hook needs to "explain" redux typescript what types needs to use 
//in useSelector hook
export const useTypedSelector: TypedUseSelectorHook<RootStateType> = useSelector;