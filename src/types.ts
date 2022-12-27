export type BackgroundType = {
  url: string,
}

export type MovieType = {
  type: string,
  title: string,
  country: string,
  genres: string[],
  imdb_rate: number,
  in_new: boolean,
  keyframe: string,
  length: number,
  min_age: number,
  num_seasons: number,
  poster: string,
  year: number,
}

export type DataType = {
  backgrounds: BackgroundType[],
  items: MovieType[],
}