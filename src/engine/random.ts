
const getRandomValue = (value1: number, value2: number) => {
    const randomizer = Math.random()
    const valueRange = value1 - value2
    return value1 - Math.round( valueRange * randomizer)
}

export default getRandomValue