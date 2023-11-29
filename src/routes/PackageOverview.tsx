import { useParams } from 'react-router-dom';

export default function PackageOverview() {
	const { id } = useParams<{ id: string }>();

	return <div>package overview with id: {id}</div>;
}
