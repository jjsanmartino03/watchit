import styles from './styles.module.pcss'
import Button from "../../ui/button";
import googleLogo from '../../assets/google.svg'

function Welcome() {
    return (
        <div className={styles.container}>
            <div>
                <h1>Watchit</h1>
                <p>Welcome to the ultimate <b>movie watchlist platform</b>. Save movies you want to watch later, order
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
                <Button theme={'secondary'} variant={'outlined'}>
                    <img width={'25'} height={25} src={googleLogo} alt={'Google Logo'}/>
                    Log In with Google</Button>
            </div>
        </div>
    )
}

export default Welcome
