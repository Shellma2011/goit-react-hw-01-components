import ProfileList from './components/ProfileList';
import StatisticsList from './components/StatisticsList';
import Section from './components/Section';
import user from './user.json';
import data from './data.json';


export default function App() {
  return (
    <div>
      <ProfileList items={user} />

      <Section title="Upload stats">
      <StatisticsList items={data} />
      </Section>
    </div>

  );
}


