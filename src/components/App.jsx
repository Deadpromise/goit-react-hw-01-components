import { SocialProfile } from './SocialProfile/SocialProfile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from 'user';
import data from 'data';
import friends from 'friends';
import transactions from 'transactions';



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
      <TransactionHistory items={transactions}></TransactionHistory>
      
    </div>
  );
};
