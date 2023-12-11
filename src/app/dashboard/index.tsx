import {Outlet, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import styles from './styles.module.pcss'
import Sidebar from "@/ui/sidebar";
import {useAppSelector} from "@redux/hooks.ts";


export default function () {
    const navigate = useNavigate();
    const status = useAppSelector(state => state.auth.status);

    const user = useAppSelector(state => state.auth.user);

    useEffect(() => {
        // dispatch(fetchUser())
    }, [])

    useEffect(() => {
        if (status === 'failed') {
            navigate("/")
        }
    }, [user])

    return (
        <div className={styles.dashboard}>
            <nav className={styles.dashboard__sidebar}>
                <Sidebar/>
            </nav>

            <main className={styles.dashboard__main}>
                {
                    user && <Outlet/>
                }

                {
                    status === 'loading' && <div>Loading...</div>
                }

                {
                    status === 'failed' && <div>Error</div>
                }
            </main>
        </div>
    )
}