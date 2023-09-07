import { FC, useEffect, useState } from 'react'

import cn from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStop, faPlay } from '@fortawesome/free-solid-svg-icons'
import { hour, minute } from '../../Constants/time.ts'

import styles from './Stopwatch.module.css'

const Stopwatch: FC = () => {
  const [seconds, setSeconds] = useState<number>(0)
  const [isActive, setIsActive] = useState<boolean>(false)

  const handleStart = () => {
    setIsActive(true)
  }

  const handleStop = () => {
    setIsActive(false)
  }

  useEffect(() => {
      let intervalId: string | number | NodeJS.Timeout | undefined

      if (isActive) {
        intervalId = setInterval(() => setSeconds(seconds + 1), 1000)
      }

      return () => clearInterval(intervalId)
    }, [isActive, seconds]
  )

  const hours = Math.floor(seconds / hour)

  const minutes = Math.floor((seconds % hour) / minute)

  return <div className={styles.stopwatch}>
    <div className={styles.stopwatchDisplay}>
      {hours}
      :{minutes.toString().padStart(2, "0")}
      :{seconds.toString().padStart(2, "0")}
    </div>

    <div className={styles.controlPanel}>
      <button className={cn(styles.btn)} onClick={handleStop}>
        <FontAwesomeIcon icon={faStop} size="xl" style={{ color: '#2b4371' }} />
      </button>

      <button className={cn(styles.btn)} onClick={handleStart}>
        <FontAwesomeIcon icon={faPlay} size="xl" style={{ color: '#2b4371' }} />
      </button>
    </div>
  </div>
}

export default Stopwatch
