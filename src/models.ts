
export interface Character {
  id: number,
  name: string,
  image: string,
  title?: string,
  family?: string
}

export interface ThroneAPICharacter {
  id: number,
  fullName: string,
  title: string,
  family: string,
  imageUrl: string
}

export const throneAPICharacterToCharacter = (c: ThroneAPICharacter): Character => ({
  id: c.id,
  name: c.fullName,
  title: c.title,
  family: c.family,
  image: c.imageUrl
});