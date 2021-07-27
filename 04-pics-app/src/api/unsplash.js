import axios from 'axios';

// export an axios with new default props
export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: 
            "Client-ID XRR-aEZnHn-m8jNVzxevcOcNUUAQ2PSh3a9r8Spt1d4"
    }
});