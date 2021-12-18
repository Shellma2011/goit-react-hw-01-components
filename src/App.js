import ProfileList from './components/Profile/ProfileList';
import Section from './components/Statistics/Section';
import StatisticsList from './components/Statistics/StatisticsList';
import FriendList from './components/FriendList/FriendList';
import TransactionHistoryList from './components/TransactionHistory/TransactionsList';

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

      <FriendList friends={friends} />

      <TransactionHistoryList items={transactions} />
    </div>
  );
}
