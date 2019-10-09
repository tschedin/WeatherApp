import React from "react";

class ErrorHandler extends React.Component {
  constructor(props) {
    super(props)
    this.state = { errorOccurred: false }
  }

  componentDidCatch = () => {
      
  }


  componentDidCatch(error, info) {
    this.setState({ errorOccurred: true })
    logErrorToMyService(error, info)
  }

  render() {
    return this.state.errorOccurred ? <h1>Could not find city/country.  Please check and re-enter.</h1> : this.props.children
  }
}

export default ErrorHandler;