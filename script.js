
const capitalize = (word) => {

    const firstLetter = word.slice(0, 1)
    const upperLetter = firstLetter.toUpperCase()
    return word.replace(firstLetter, upperLetter)

}

export default capitalize 