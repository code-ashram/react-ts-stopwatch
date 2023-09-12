import { FC, useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause, faPlay, faArrowRotateRight } from '@fortawesome/free-solid-svg-icons'
import { hour, minute } from '../../Constants/time.ts'

import styles from './Stopwatch.module.css'

const Stopwatch: FC = () => {
  const [time, setTime] = useState<number>(0)
  const [isActive, setIsActive] = useState<boolean>(false)

  const handleToggleStart = () => {
    setIsActive(!isActive)
  }

  const handleReset = () => {
    setTime(0)
  }

  useEffect(() => {
      let intervalId: string | number | NodeJS.Timeout | undefined

      if (isActive) {
        intervalId = setInterval(() => setTime(time + 1), 1000)
      }

      return () => clearInterval(intervalId)
    }, [isActive, time]
  )

  const hours = Math.floor(time / hour)

  const minutes = Math.floor((time % hour) / minute)

  const seconds = Math.floor(time % minute)

  return <div className={styles.stopwatch}>
    <div className={styles.stopwatchDisplay}>
      {hours}
      :{minutes.toString().padStart(2, '0')}
      :{seconds.toString().padStart(2, '0')}
    </div>

    <div className={styles.controlPanel}>
      <button className={styles.btn} onClick={handleToggleStart}>
        <FontAwesomeIcon icon={isActive ? faPause : faPlay} size="xl" style={{ color: '#2b4371' }} />
      </button>

      <button className={styles.btn} onClick={handleReset}>
        <FontAwesomeIcon icon={faArrowRotateRight} size="xl" style={{ color: '#2b4371' }} />
      </button>
    </div>
  </div>
}

export default Stopwatch
