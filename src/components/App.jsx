import { SocialProfile } from "./SocialProfile/SocialProfile";
import {Statistics} from './Statistics/Statistics'
import user from 'user';
import data from 'data';


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
    </div>
  );
};
