import { Suspense, useEffect } from 'react';
import { classNames } from 'shared/libs/classNames/classNames';
import AppRouter from 'app/providers/router/ui/AppRouter';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidevar';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';
import { useTheme } from 'app/providers/ThemeProvider';

const App = () => {
    const dispatch = useDispatch();
    const { theme } = useTheme();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
