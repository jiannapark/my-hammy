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
      <div className="section">
        <div className="title is-3">Welcome, {name}</div>
        <div>
          <div className="subtitle">Choose your hamster:</div>
          {hamsters.map(hamster => (
            <Link
              to={`/hamster/${hamster.id}`}
              key={hamster.id}
              className="box"
              style={{display: 'flex'}}
            >
              <img
                src={hamster.imageUrl}
                width="200"
                style={{marginRight: '1.5rem'}}
              />
              <div style={{alignSelf: 'center'}}>
                <div className="title is-5">Name: {hamster.name}</div>
                <div className="title is-6">Species: {hamster.species}</div>
                <div>Bio: {hamster.bio}</div>
              </div>
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
