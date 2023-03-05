import { UserProfile, UserDescription, UserAvatar, UserName, UserTag, UserLocation } from './SocialProfile.styled';

export const SocialProfile = ({ }) => {
    return (
        <UserProfile>
            <UserDescription>
                <UserAvatar>1</UserAvatar>
                <UserName>2</UserName>
                <UserTag>3</UserTag>
                <UserLocation>4</UserLocation>
            </UserDescription>
        </UserProfile>
    )
}