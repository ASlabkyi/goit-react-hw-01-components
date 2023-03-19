import { Profile } from './Profile/Profile';
import user from '../components/Profile/user.json';

export const App = () => {
  return (
    <Profile
      name={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  );
};