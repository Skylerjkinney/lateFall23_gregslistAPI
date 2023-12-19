import { dbContext } from "../db/DbContext.js"

class HousesService {
    async createHouse(houseData) {
        const house = await dbContext.Houses.create(houseData)
        return house
    }
    async getHouses() {
        const houses = await dbContext.Houses.find()
        return houses
    }
    async getOneHouse(houseId) {
        const foundHouse = dbContext.Houses.findById(houseId)
        if (!foundHouse) {
            throw new Error('oops something went wrong, but I aint tellin')
        }
        return foundHouse
    }
}

export const housesService = new HousesService()