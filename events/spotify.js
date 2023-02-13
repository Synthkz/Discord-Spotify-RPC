const rpcGenerator = require("discordrpcgenerator");
module.exports = (client) => {


  let presence = rpcGenerator.createSpotifyRpc(client)

    .setDetails("Elle ne m'aime plus...") // Nom de la musique
    .setState("6yeq") // Nom de l'Artist
    .setAssetsLargeImage("spotify:ab67706c0000bebb15d135b5730ac7c5ecc55932") // Mettre le lien de la photo de profile de t'as playlist spotify, tu dois passer sur l'API Spotify
    .setStartTimestamp("" || Date.now()) // Pas toucher
    .setEndTimestamp("" || Date.now()+1672531200000) // Pas toucher
  client.user.setStatus("dnd"); //idle, dnd ou online
  client.user.setPresence(presence.toDiscord()).catch(console.error);

  console.log(presence)
  console.log(' ')
  console.log('██████  ██████   ██████     ███████ ███    ██     ██      ██  ██████  ███    ██ ███████')
  console.log('██   ██ ██   ██ ██          ██      ████   ██     ██      ██ ██       ████   ██ ██      ')
  console.log('██████  ██████  ██          █████   ██ ██  ██     ██      ██ ██   ███ ██ ██  ██ █████   ')
  console.log('██   ██ ██      ██          ██      ██  ██ ██     ██      ██ ██    ██ ██  ██ ██ ██      ')
  console.log('██   ██ ██       ██████     ███████ ██   ████     ███████ ██  ██████  ██   ████ ███████')
  // console.log(("La RPC Spotify est on ✅"))
}