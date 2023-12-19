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
    async updateHouse(houseId, updateData) {
        const originalHouse = await this.getOneHouse(houseId)

        originalHouse.bedrooms = updateData.bedrooms != undefined ? updateData.bedrooms : originalHouse.bedrooms
        originalHouse.bathrooms = updateData.bathrooms ? updateData.bathrooms : originalHouse.bathrooms
        originalHouse.year = updateData.year ? updateData.year : originalHouse.year
        originalHouse.price = updateData.price ? updateData.price : originalHouse.price
        originalHouse.description = updateData.description ? updateData.description : originalHouse.description
        await originalHouse.save()
        return originalHouse
    }
    async removeHouse(houseId) {
        const houseToRemove = await dbContext.Houses.findById(houseId)
        if (!houseToRemove) {
            throw new Error('AHHHHHHHHHHHHH MY EYES')
        }
        await houseToRemove.remove()
        return `bang bang ${houseToRemove.price}`
    }
}

export const housesService = new HousesService()