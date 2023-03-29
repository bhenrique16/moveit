import styles from '../styles/components/Profile.module.css'
export function Profile (){
    return(
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/50328718?v=4" alt="BH" />
            <div>
                <strong>Bruno Henrique</strong>
                <p>
                    <img src="icons/level.svg" alt="" />
                    Level 1</p>
            </div>
        </div>
        
    )
}