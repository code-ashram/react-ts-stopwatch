import { FC } from 'react'

import cn from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStop, faPlay } from '@fortawesome/free-solid-svg-icons'

import styles from './Stopwatch.module.css'

const Stopwatch: FC = () => {

  return <div className={styles.stopwatch}>
    <div className={styles.stopwatchDisplay}>00:00:00</div>

    <div className={styles.controlPanel}>
      <button className={cn(styles.btn)}>
        <FontAwesomeIcon icon={faStop} size="xl" style={{color: "#2b4371",}} />
      </button>

      <button className={cn(styles.btn)}>
        <FontAwesomeIcon icon={faPlay} size="xl" style={{color: "#2b4371",}}/>
      </button>
    </div>
  </div>
}

export default Stopwatch
