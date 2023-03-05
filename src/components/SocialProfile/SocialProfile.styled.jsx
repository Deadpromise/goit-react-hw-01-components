import styled from '@emotion/styled';

export const UserProfile = styled.div`
    border: 1px solid black;
`;
export const UserDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    padding: 30px;
`;
export const UserAvatar = styled.img`

`;
export const UserName = styled.p`
    margin-top: 10px;
`;
export const UserTag = styled.p`
     margin-top: 10px;
`;
export const UserLocation = styled.p`
    margin-top: 10px;
`;
export const UserStatsList = styled.ul`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: silver;
`;
export const UserStatsItem = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    font-size: 20px;
    width: calc((100% / 3) - 40px);

    &:not(:last-child) {
    border-right: 1px solid black;
    };
 
`;
export const UserStatsLabel = styled.span`
    
`;
export const UserStatsQaunt = styled.span`
    
`;






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