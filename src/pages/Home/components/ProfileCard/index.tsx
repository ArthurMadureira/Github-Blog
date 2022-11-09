import axios from "axios"
import { useEffect, useState } from "react";

export function ProfileCard() {
  const [profileData, setProfileData] = useState()

  async function fetchProfileData() {
    const response = await axios.get('https://api.github.com/users/ArthurMadureira')
    setProfileData(response.data);
  }

  useEffect(() => {
    fetchProfileData()
    console.log(profileData);
  }, [])


  return (
    <div>
      <img src='' alt="" />
    </div>
  )
}