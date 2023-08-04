// Write your code here
import './index.css'

const DenominationItem = props => {
  const {eachBox, subAmount} = props
  const {value} = eachBox
  const onSub = () => {
    subAmount(value)
  }

  return (
    <li>
      <button type="button" onClick={onSub}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
