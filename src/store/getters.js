
//getters是对state做一些映射----基础的代理
export const phone = state => state.phone

export const userId = state => state.userId

export const username = state => state.username

export const avatarUrl = state => state.avatarUrl

export const isLogin = state => state.isLogin

export const videoId = state => state.videoId

export const singer = state => state.singer

export const playing = state => state.playing

export const fullScreen = state => state.fullScreen

export const playlist = state => state.playlist

export const sequenceList = state => state.sequenceList

export const mode = state => state.mode

export const currentIndex = state => state.currentIndex

//计算属性
export const currentSong = (state) => {
  return state.playlist[state.currentIndex] || {}
}

export const disc = state => state.disc

export const topList = state => state.topList

export const modeType = state => state.modeType

export const searchHistory = state => state.searchHistory

export const playHistory = state => state.playHistory

export const favoriteList = state => state.favoriteList
