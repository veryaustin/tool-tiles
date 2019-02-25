const getIconNames = paths => {
  return Object.keys(paths).reduce((icons, item) => {
    icons[item] = item
    return icons
  }, {})
}

export default getIconNames
