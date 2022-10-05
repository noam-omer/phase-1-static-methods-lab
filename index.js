class Formatter {
  static capitalize(string){
    let returnString = ''
    returnString += string[0].toUpperCase()
    if (string.length > 1)
      returnString += string.slice(1)
    
    return returnString

  }
  static sanitize(string){
    return string.replace(/[~!@#$%^&*_+=:;"<>,>?(){}]/g, "")
  }

  static titleize(string){
    let returnString = ''
    const words = string.split(" ")
    const words0 = words[0]
    console.log(words[0])
    console.log("capitalize" + this.capitalize(words[0]))
    returnString += this.capitalize(words[0]) + " "
    for (let i = 1; i < words.length - 1; i++){
      if(['a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from', 'the'].includes(words[i]))
        returnString += words[i] + " "
      else returnString += this.capitalize(words[i]) + " "
    }
    if(['a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from', 'the'].includes(words[words.length-1]))
      returnString += words[words.length]
    else returnString += Formatter.capitalize(words[words.length-1])
    
    return returnString
  }
}