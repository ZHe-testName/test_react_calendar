import { Layout, Menu } from "antd";
import { useHistory } from "react-router";
import { RouteNames } from "../routes/routes";

const Navbar = () => {
    //create obj router with hook udeHistory
    //it needs 4 switching between our routes
    //4 that we used proprty func push()
    //and put into route path
    const router = useHistory();

    const isAuth = true;

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
                                        Zhekanchik
                                    </Menu.Item>

                                    <Menu.Item 
                                        onClick={() => console.log('hi')} 
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