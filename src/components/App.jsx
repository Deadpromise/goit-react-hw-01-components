import { SocialProfile } from "./SocialProfile/SocialProfile";
import {Statistics} from './Statistics/Statistics'
import user from 'user';
import data from 'data';
import friends from 'friends';
import { FriendList } from "./FriendList/FriendList";


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <SocialProfile profile={user}></SocialProfile>
      <Statistics title='Upload stats' stats={data}></Statistics>
      <FriendList friends={friends}></FriendList>
    </div>
  );
};
