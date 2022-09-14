import useSWR from 'swr';
import { ConfigContextProvider } from '../config-adapter';
import SingleDayView from '../components/organisms/single-day-view';

const fetcher = (query: string) =>
  fetch('/api/graphql', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ query })
  })
    .then((res) => res.json())
    .then((json) => json.data);

export default function Index() {
  const { data, error } = useSWR('{ events { id, title, start, end } }', fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const { events } = data;

  return (
    <ConfigContextProvider>
      <SingleDayView events={events} />
    </ConfigContextProvider>
  );
}
