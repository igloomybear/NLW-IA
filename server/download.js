import ytdl from "ytdl-core"
import fs from "fs"

export const download = (videoId) => {
  const videoURL = "https://www.youtube.com/shorts/" + videoId
  console.log("Realizado o download do vídeo:", videoId)

  ytdl(videoURL, { quality: "lowestaudio", filter: "audioonly" }).on(
    "info",
    (info) => {
      const seconds = info.formats[0].approxDurationMs / 1000

      if (seconds > 60) {
        throw new Error("A duração desse vídeo é mais que 60 segundos.")
      }
    }
  )
}
