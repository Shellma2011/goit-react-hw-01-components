import ProfileList from './components/ProfileList';
import Section from './components/Section';
import StatisticsList from './components/StatisticsList';
import FriendList from './components/FriendList';
import TransactionHistoryList from './components/TransactionsList';
import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import transactions from './transactions.json';



export default function App() {
  return (
    <div>
      <ProfileList items={user} />

      <Section title="Upload stats">
      <StatisticsList items={data} />
      </Section>

      <FriendList items={friends} />

      <TransactionHistoryList items={transactions} />
    </div>
  );
}


