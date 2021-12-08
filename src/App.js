import ProfileList from './components/ProfileList';
import Section from './components/Section';
import StatisticsList from './components/StatisticsList';
import FriendList from './components/FriendList';
import user from './user.json';
import data from './data.json';
import friends from './friends.json';


export default function App() {
  return (
    <div>
      <ProfileList items={user} />

      <Section title="Upload stats">
      <StatisticsList items={data} />
      </Section>

      <FriendList items={friends} />,
    </div>

  );
}


