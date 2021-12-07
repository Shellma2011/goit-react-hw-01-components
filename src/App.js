import ProfileList from './components/ProfileList';
// import Section from './components/Section';
import user from './user.json';

export default function App() {
  return (
    <div>
      <ProfileList items={user} />
    </div>
  );
}


