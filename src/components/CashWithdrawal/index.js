// Write your code here
import './index.css'

import {Component} from 'react'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {total: 2000}

  subAmount = value => {
    this.setState(prevState => ({
      total: prevState.total - value,
    }))
  }

  render() {
    const {total} = this.state
    const denominationsList = this.prop
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)

    return (
      <div className="white-card">
        <div className="blue-card">
          <div>
            <div className="circle">
              <p className="s">{initial}</p>
            </div>

            <p>{name}</p>
          </div>

          <div className="d-flex flex-row">
            <p> Your Balance</p>
            <div>
              <p className="amount"> {total}</p>
              <p>In Rupees</p>
            </div>
          </div>

          <div>
            <h1>Withdraw</h1>
            <p>CHOOSE SUM(IN RUPEES)</p>
          </div>

          <ul>
            {denominationsList.map(eachAmount => (
              <DenominationItem
                subAmount={this.subAmount}
                eachBox={eachAmount}
                key={eachAmount.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
