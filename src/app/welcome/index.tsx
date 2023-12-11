import styles from './styles.module.pcss'
import Button from "../../ui/button";
import googleLogo from '../../assets/google.svg'
import {useEffect} from "react";
import {Hub} from "aws-amplify/utils";
import {signInWithRedirect} from "aws-amplify/auth";
import {Navigate, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "@redux/hooks.ts";
import {fetchUser} from "@redux/slices/auth.ts";

function Welcome() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const user = useAppSelector(state => state.auth.user);

    useEffect(() => {
        const unsubscribe = Hub.listen("auth", ({payload}) => {
            switch (payload.event) {
                case "signInWithRedirect":
                    dispatch(fetchUser());
                    navigate("/dashboard")
                    break;
                case "signInWithRedirect_failure":
                    break;
                case "customOAuthState":
                    break;
            }
        });

        dispatch(fetchUser());

        return unsubscribe;
    }, []);


    if (user) {
        return <Navigate to={'/dashboard'}/>;
    }

    return (
        <div className={styles.outerContainer}>
            <div className={styles.container}>
                <div>
                    <h1>Watchit</h1>
                    <p>Welcome to the ultimate <b>movie watchlist platform</b>. Save movies you want to watch later,
                        order
                        them
                        by priority, and
                        rate them
                        in our ultra intuitive app. Give it a try, the app was built as a learning project, with AWS
                        Amplify,
                        React and Redux Sagas.
                    </p>
                </div>
                <div className={styles.container__loginCard}>
                    <p>Log In to try our features</p>
                    <Button onClick={() => signInWithRedirect({
                        provider: "Google",
                    })} theme={'secondary'} variant={'outlined'}>
                        <img width={'25'} height={25} src={googleLogo} alt={'Google Logo'}/>
                        Log In with Google</Button>
                </div>
            </div>
        </div>

    )
}

export default Welcome
