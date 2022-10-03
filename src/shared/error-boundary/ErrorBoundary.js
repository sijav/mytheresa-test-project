import {Component} from 'react';
import {ErrorContext} from './ErrorContext';
import PropTypes from 'prop-types';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {error: null};
  }

  static getDerivedStateFromError(error) {
    return {error};
  }

  retry = () => {
    this.setState({error: null});
  };

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.error) {
      return (
        <ErrorContext.Provider
          value={{
            error: this.state.error,
            reset: this.retry
          }}
        >
          {this.props.fallback}
        </ErrorContext.Provider>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  fallback: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
