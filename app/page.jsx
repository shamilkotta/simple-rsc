import { Suspense } from 'react';
import { getAll } from '../data/db.js';
import Like from './Like.jsx';
// import ErrorBoundary from './_error.jsx';

async function Albums() {
	const albums = await getAll();
	return (
		<ul>
			{albums.map((a) => (
				<li key={a.id} className="flex gap-2 items-center mb-2">
					<img className="w-20 aspect-square" src={a.cover} alt={a.title} />
					<div>
						<h3 className="text-xl">{a.title}</h3>
						<p>{a.songs.length} songs</p>
						<Like />
					</div>
				</li>
			))}
		</ul>
	);
}

const CatchErr = (props) => {
	console.log(props);

	return <h1>Error Occured</h1>;
};

export default async function Page() {
	return (
		<>
			<h1 className="text-3xl mb-3">Spotifn’t</h1>
			{/* <ErrorBoundary> */}
			<Suspense fallback="Getting albums">
				{/* @ts-expect-error 'Promise<Element>' is not a valid JSX element. */}
				<Albums />
			</Suspense>
			{/* </ErrorBoundary> */}
		</>
	);
}
