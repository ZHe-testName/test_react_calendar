import React from 'react';

//if any of route dousent fit we used redirect to basik route
import { Route, Switch, Redirect } from 'react-router-dom';

//used 4 choosing one of incertad routes according browser find row
import { privateRoutes, publicRoutes, RouteNames } from '../routes/routes';

const AppRouter = () => {
    const isAuth = true;

    //if user in adress row entered some fake adress we use Redirect 4 send him to fixed page
    return (
            isAuth
                ?
                <Switch>
                    {
                        privateRoutes.map(route => <Route {...route} key={route.path}/>)
                    }

                    <Redirect to={RouteNames.EVENTS}/>
                </Switch>
                :
                <Switch>
                    {
                        publicRoutes.map(route => <Route {...route} key={route.path}/>)
                    }

                    <Redirect to={RouteNames.LOGIN}/>
                </Switch>
    );
};

export default AppRouter;