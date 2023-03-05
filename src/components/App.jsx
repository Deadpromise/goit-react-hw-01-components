import { SocialProfile } from "./SocialProfile/SocialProfile";

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
      <SocialProfile></SocialProfile>
      React homework template
    </div>
  );
};
