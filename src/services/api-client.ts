import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '24f39092a113450eadc19d589196ff02'
    }
})