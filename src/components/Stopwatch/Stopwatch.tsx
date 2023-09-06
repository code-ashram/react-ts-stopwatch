import { FC, useEffect, useState } from 'react'

import cn from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStop, faPlay } from '@fortawesome/free-solid-svg-icons'
import Time from '../../Models/Time.ts'

import styles from './Stopwatch.module.css'

const Stopwatch: FC = () => {
  const [time, setTime] = useState<Time>({ seconds: 56, minutes: 59, hours: 0 })
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
      intervalId = setInterval(() => setTime(prevTime => {
          if (prevTime.seconds >= 59) {
            return { ...prevTime, seconds: 0, minutes: prevTime.minutes + 1 }
          }

          if (prevTime.minutes > 59) {
            return { ...prevTime, minutes: 0, hours: prevTime.hours + 1, seconds: 1 }
          }

          return { ...prevTime, seconds: prevTime.seconds + 1 }
        }
      ), 1000)
    } else {
      clearInterval(intervalId)
      setTime(
        (prevTime) => ({ ...prevTime })
      )
    }

    return () => clearInterval(intervalId)
  }, [isActive])

  return <div className={styles.stopwatch}>
    <div className={styles.stopwatchDisplay}>{time.hours}:{time.minutes}:{time.seconds}</div>

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
