import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getHamsters} from '../store/hamster'

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.getHamsters(this.props.userId)
    // const hamsterId = this.props.match.params.id
    // if hamsterId, show that hamster's dashboard
    // otherwise, default to hamster #1
  }

  render() {
    const {hamsters} = this.props

    return (
      <div className="section" style={{display: 'flex'}}>
        <div
          className="container"
          // style={{width: '135px'}}
        >
          {/* sidemenu */}
          <h3>Dashboard</h3>
          {hamsters.map(hamster => (
            <Link to={`/dashboard/${hamster.id}`} key={hamster.id}>
              <h5>{hamster.name}</h5>
            </Link>
          ))}
        </div>

        {/* dashboard for the selected hamster */}
        <div className="container" id="dashboard" style={{flexGrow: 7}}>
          <div className="box">box 1</div>
          <div className="box">box 2</div>
          <div className="box">box 3</div>
          <div className="box">box 4</div>
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
