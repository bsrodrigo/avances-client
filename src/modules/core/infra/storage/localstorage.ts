export const getLocalStorage = (key: string) => {
  const item = localStorage.getItem(key)

  if (!item) {
    return null
  }
  return JSON.parse(item)
}

export const setLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const removeLocalStorage = (key: string) => {
  localStorage.removeItem(key)
}
