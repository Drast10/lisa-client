import React, { Component } from 'react'
import {connect} from 'react-redux'
<<<<<<< Updated upstream
import { getAllTypes } from '../../actions/types'

=======
import { createType } from '../../actions/types'
>>>>>>> Stashed changes
import TypeForm from './TypeForm'


export class TypeFormContainer extends Component {
  state = {
    typeName: ''
  }

  componentDidMount = () => {
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.createType(this.state)
    this.setState({
      typeName: ''
    })
  }
  
  render () {
    const { onChange, onSubmit, state } = this
    const { typeName } = state
    return (
      <div className="TypeForm">
        <TypeForm 
          typeName={typeName}
          onChange={onChange}
          onSubmit={onSubmit}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
<<<<<<< Updated upstream
    getAllTypes: dispatch => getAllTypes()
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TypeFormContainer)
=======
    createType: createType
  }
}

export default connect(mapStateToProps, mapDispatchToProps )(TypeFormContainer)
>>>>>>> Stashed changes
