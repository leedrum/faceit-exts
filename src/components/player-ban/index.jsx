/** @jsx h */
import { h } from 'dom-chef'
import { formatDistance, parseISO } from 'date-fns'

export const PlayerBan = ({ banStart, banEnd, expired, reason }) => {
  const isActive = !expired
  const className = isActive ? 'text-success' : 'text-danger'

  return (
    <span
      className={className}
      style={{
        cursor: 'help'
      }}
      title={banStart}
    >
      <span style={{ float: 'right' }}>[{reason}]</span>
      {formatDistance(parseISO(banEnd), new Date(), { addSuffix: true })}
    </span>
  )
}

export default PlayerBan
