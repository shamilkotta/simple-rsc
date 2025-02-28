import { createRoot } from 'react-dom/client';
import { createFromFetch } from 'react-server-dom-webpack/client';
import ErrorBoundary from './_error';

// @ts-expect-error `root` might be null
const root = createRoot(document.getElementById('root'));

/**
 * Fetch your server component stream from `/rsc`
 * and render results into the root element as they come in.
 */
createFromFetch(fetch('/rsc')).then((comp) => {
	console.log(comp);
	root.render(<ErrorBoundary>{comp}</ErrorBoundary>);
});