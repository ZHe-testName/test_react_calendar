import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actoinCreators } from '../store/reducers/actionCreators';

//custom hook 4 optymization dispatching of actions
//we can take actioncreators in any part of program
//and call only reurned function
export const useDispatchedActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators(actoinCreators, dispatch);
};
