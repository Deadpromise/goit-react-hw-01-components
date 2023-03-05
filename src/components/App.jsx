import { SocialProfile } from "./SocialProfile/SocialProfile";
import user from 'user';

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
    </div>
  );
};
