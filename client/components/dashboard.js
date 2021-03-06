import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getHamsters} from '../store/hamster'
import {WeightGraph} from './index'

export class Dashboard extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     selectedHamster: 1
  //   }
  //   this.handleSwitch = this.handleSwitch.bind(this)
  // }

  componentDidMount() {
    this.props.getHamsters(this.props.userId)
  }

  // handleSwitchHamster() {
  // when user views another ham's dashboard, on click
  // const hamsterId = this.props.match.params.id
  //   ? this.props.match.params.id
  //   : 1
  // this.props.getWeights(hamsterId)
  // this.setState({selectedHamster: hamsterId})
  // }

  render() {
    const {hamsters} = this.props

    return (
      <div className="section" style={{display: 'flex'}}>
        <div
          className="container"
          style={
            {
              // backgroundColor: '#eff0eb',
              // width: '135px'
            }
          }
        >
          {/* select a hamster */}
          <h3>Dashboard</h3>
          {hamsters.map(hamster => (
            <Link to={`/dashboard/${hamster.id}`} key={hamster.id}>
              <h5>{hamster.name}</h5>
            </Link>
          ))}
        </div>

        {/* dashboard for the selected hamster */}
        <div
          className="container"
          id="dashboard"
          style={{flexGrow: 7, display: 'flex', flexWrap: 'wrap'}}
        >
          <div className="box dashboard-card">
            <WeightGraph />
          </div>
          <div className="box dashboard-card">box 2</div>
          <div className="box dashboard-card">box 3</div>
          <div className="box dashboard-card" style={{marginBottom: '1.5rem'}}>
            box 4
          </div>
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    userId: state.user.id,
    hamsters: state.hamster.hamsters
  }
}

const mapDispatch = dispatch => {
  return {
    getHamsters: userId => dispatch(getHamsters(userId))
  }
}

export default connect(mapState, mapDispatch)(Dashboard)
