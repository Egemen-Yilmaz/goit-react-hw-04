import React from 'react';
import styles from './ErrorBoundary.module.css';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // You could log to an external service here
    console.error('Uncaught error in component tree:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.wrapper}>
          <h2>Something went wrong.</h2>
          <p>We caught an unexpected error. Try reloading the page.</p>
          <pre className={styles.stack}>{String(this.state.error)}</pre>
        </div>
      );
    }

    return this.props.children;
  }
}
