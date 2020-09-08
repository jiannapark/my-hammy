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
    const {email, hamsters} = this.props

    return (
      <div>
        <h3>Welcome, {email}</h3>
        <div>
          Here are your hamsters:
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
    email: state.user.email,
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
