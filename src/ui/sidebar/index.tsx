import styles from './styles.module.pcss'
import {Link} from "react-router-dom";
import Button from "../button";
import {useAppDispatch, useAppSelector} from "@redux/hooks.ts";
import {signOut} from "@redux/slices/auth.ts";

export default function Sidebar() {
    const user = useAppSelector(state => state.auth.user);
    const dispatch = useAppDispatch();

    return <div className={styles.sidebar}>
        <header><h1>Watchit</h1>
            <h3>The ultimate movie watchlist platform</h3>
            <p>Hi, {user?.name}</p>
        </header>
        <hr/>

        <ul className={styles.sidebar__navLinks}>
            <li><Link to={''}>Dashboard</Link></li>
            <li><Link to={'/dashboard/search'}>Search</Link></li>
            <li><Button onClick={() => dispatch(signOut())} variant={'link'} theme={'secondary'}>Sign Out</Button></li>
        </ul>
    </div>
}