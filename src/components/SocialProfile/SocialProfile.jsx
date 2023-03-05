import {
    UserProfile, UserDescription, UserAvatar, UserName, UserTag,
    UserLocation, UserStatsList, UserStatsItem, UserStatsLabel, UserStatsQaunt
} from './SocialProfile.styled';
import PropTypes from 'prop-types';

export const SocialProfile = ({ profile }) => {
    const { avatar, username, tag, location, stats: { followers, likes, views } } = profile;

    return (
        <UserProfile>
            <UserDescription>
                <UserAvatar src={avatar} alt="User avatar"></UserAvatar>
                <UserName>{username}</UserName>
                <UserTag>@{tag}</UserTag>
                <UserLocation>{ location }</UserLocation>
            </UserDescription>
            <UserStatsList>
                <UserStatsItem>
                    <UserStatsLabel>Followers</UserStatsLabel>
                    <UserStatsQaunt>{ followers }</UserStatsQaunt>
                </UserStatsItem>
                <UserStatsItem>
                    <UserStatsLabel>Views</UserStatsLabel>
                    <UserStatsQaunt>{ views }</UserStatsQaunt>
                </UserStatsItem>
                <UserStatsItem>
                    <UserStatsLabel>Likes</UserStatsLabel>
                    <UserStatsQaunt>{ likes }</UserStatsQaunt>
                </UserStatsItem>
            </UserStatsList>
        </UserProfile>
    )
}

SocialProfile.propTypes = {
    profile: PropTypes.shape({
        username: PropTypes.string.isRequired,
        tag:  PropTypes.string.isRequired,
        location:  PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        stats: PropTypes.shape({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired,
        }),
    })

}

/* <div class="profile">
  <div class="description">
    <img
      src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
      alt="User avatar"
      class="avatar"
    />
    <p class="name">Petra Marica</p>
    <p class="tag">@pmarica</p>
    <p class="location">Salvador, Brasil</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">1000</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">2000</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">3000</span>
    </li>
  </ul>
</div> */