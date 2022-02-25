export type timer = NodeJS.Timer

export type Timer<T> = T extends timer ? T : number


export type Picker<T, V extends keyof T> = {
  [key in V]: T[key]
}

