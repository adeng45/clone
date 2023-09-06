import React from "react"
import useAuth from "./useAuth"

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
})

export default function Dashboard({ code }) {
  const accessToken = useAuth(code);
  return <div>{ code }</div>
}
