import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 31F9NmISiAMNK6OVl83p9QKTB9rw1MKZVAnaDKZYm0g'
    }
})

