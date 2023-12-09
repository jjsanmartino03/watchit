import styles from './styles.module.pcss'
function Welcome() {
    return (
        <div className={styles.container}>
            <div><h1>Watchit</h1>
                <p>Welcome to the ultimate <b>movie watchlist platform</b>. Save movies you want to watch later, order
                    them
                    by priority, and
                    rate them
                    in our ultra intuitive app. Give it a try, the app was built as a learning project, with AWS
                    Amplify,
                    React and Redux Sagas.
                </p></div>
            <div>
                <p>Log In to try our features</p>
                <button>Log In with Google</button>
            </div>
        </div>
    )
}

export default Welcome
