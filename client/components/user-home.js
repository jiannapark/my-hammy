import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getHamsters} from '../store/hamster'

export class UserHome extends React.Component {
  componentDidMount() {
    this.props.getHamsters(this.props.userId)
  }

  render() {
    const {name, hamsters} = this.props

    return (
      <div>
        <h3>Welcome, {name}</h3>
        <div>
          Choose your hamster:
          {hamsters.map(hamster => (
            <Link to={`/hamster/${hamster.id}`} key={hamster.id}>
              <h5>{hamster.name}</h5>
              <img src={hamster.imageUrl} width="200" />
            </Link>
          ))}
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    userId: state.user.id,
    name: state.user.firstName,
    hamsters: state.hamster.hamsters
  }
}

const mapDispatch = dispatch => {
  return {
    getHamsters: userId => dispatch(getHamsters(userId))
  }
}

export default connect(mapState, mapDispatch)(UserHome)

UserHome.propTypes = {
  email: PropTypes.string
}
