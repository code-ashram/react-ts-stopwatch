import { FC } from 'react'

import styles from './Stopwatch.module.css'

const Stopwatch: FC = () => {

  return <div className={styles.stopwatch}>
    <div className={styles.stopwatchDisplay}>00:00:00</div>

    <div className={styles.controlPanel}>
      <button className={styles.stopButton}>{'\u26D4'}</button>
      <button className={styles.startButton}>{'\u25B6'}</button>
    </div>
  </div>
}

export default Stopwatch
