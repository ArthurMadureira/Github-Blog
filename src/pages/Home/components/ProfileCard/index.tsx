import axios from "axios"
import { useEffect, useState } from "react";
import { ProfileCardContainer, ProfileInfo, SocialMedia } from "./styles";
import { Users } from 'phosphor-react'

interface ProfileData {
  login: string
  avatar_url: string
  html_url: string
  followers_url: string
  name: string
  bio: string
  followers: number
}


export function ProfileCard() {
  const [profileData, setProfileData] = useState<ProfileData>()

  async function fetchProfileData() {
    const response = await axios.get('https://api.github.com/users/ArthurMadureira')
    setProfileData(response.data);
  }

  useEffect(() => {
    fetchProfileData()
  }, [])

  if (!profileData) {
    return (
      <div>Loding...</div>
    )
  }
  return (
    <ProfileCardContainer>
      <img src={profileData?.avatar_url} alt="" />

      <ProfileInfo>
        <h2>{profileData?.name}</h2>
        <p>{profileData?.bio}</p>

        <SocialMedia>
          <a href={profileData?.html_url} target='_blank'>
            @
            {profileData?.login}
          </a>
          <a href={profileData?.html_url} target='_blank'>
            <Users size={16} />

            {profileData?.followers}{" "}
            followers
          </a>
        </SocialMedia>
      </ProfileInfo>
    </ProfileCardContainer>
  )
}