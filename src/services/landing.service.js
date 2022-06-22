import axios from "axios"
import { asyncStorageService } from "./asyncStorageService"
import { syncStorageService } from "./syncStorageService"

export const landingService = {
    query
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

    if (filterBy.status) landings = landings.filter(landing => landing.status === filterBy.status)
    landings = landings.slice(pageIdx, pageIdx + PAGE_SIZE)
    return landings
}