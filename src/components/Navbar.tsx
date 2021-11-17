import { Layout, Menu } from "antd";
import { useHistory } from "react-router";
import { useDispatchedActions } from "../hooks/useDispatchedActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { RouteNames } from "../routes/routes";

const Navbar = () => {
    //create obj router with hook udeHistory
    //it needs 4 switching between our routes
    //4 that we used proprty func push()
    //and put into route path
    const router = useHistory();

    const { isAuth, user } = useTypedSelector(state => state.authReducer);

    const { logout } = useDispatchedActions();

    return (
            <Layout.Header>
                    {
                        isAuth

                            ?<Menu theme='dark' mode='horizontal' selectable={false} style={{justifyContent: 'flex-end'}}>
                                    <Menu.Item 
                                        style={{color: 'white',
                                                cursor: 'auto'}} 
                                        disabled={true}
                                        key={1}>
                                        { user.username }
                                    </Menu.Item>

                                    <Menu.Item 
                                        onClick={() => { logout() }} 
                                        key={2}>Logoff</Menu.Item>
                                </Menu>
                           
                            :<Menu theme='dark' mode='horizontal' selectable={false} style={{justifyContent: 'flex-end'}}>
                                <Menu.Item 
                                    onClick={() => router.push(RouteNames.LOGIN)} 
                                    key={1}>Login</Menu.Item>
                            </Menu>
                    }
            </Layout.Header>
    );
};

export default Navbar;