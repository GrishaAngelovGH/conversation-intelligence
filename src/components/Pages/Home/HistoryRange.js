import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

const HistoryRange = () => {
  const ranges = ['Last 24h', 'Last 7 days', 'Last 30 days', 'This Month', 'Custom']

  return (
    <ButtonGroup>
      {
        ranges.map((v, i) => (
          <Button key={i} variant='outline-primary'>{v}</Button>
        ))
      }
    </ButtonGroup>
  )
}

export default HistoryRange