'use client';

import { Component } from 'react';

class ErrorBoundary extends Component {
	state = { hasError: false, error: null };

	static getDerivedStateFromError(error) {
		return { hasError: true, error };
	}

	render() {
		if (this.state.hasError) {
			console.log({ err: this.state.error });

			return <div>Something went wrong on the.</div>;
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
