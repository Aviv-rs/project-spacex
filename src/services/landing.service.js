import axios from "axios"
import { asyncStorageService } from "./asyncStorageService"
import { syncStorageService } from "./syncStorageService"

export const landingService = {
    query, getById
}

const KEY = 'landing_db'
const SPACEX_API_URL = 'https://api.spacexdata.com/v4/launches'
const PAGE_SIZE = 20

async function query(filterBy = {}, pageIdx = 0) {
    let landings = await asyncStorageService.query(KEY)
    if (!landings) {
        const { data } = await axios.get(SPACEX_API_URL)
        landings = data
        syncStorageService.saveToStorage(KEY, landings)
    }

    landings = landings.slice(pageIdx, pageIdx + PAGE_SIZE)
    if (filterBy.status && filterBy.status !== 'all') {
        landings = landings.filter(landing => {
            return (landing.success !== undefined) && (landing.success && filterBy.status === 'success') ||
                (!landing.success && filterBy.status === 'failed')
        })
    }

    return landings
}

async function getById(landingId) {
    return await asyncStorageService.get(KEY, landingId)
}