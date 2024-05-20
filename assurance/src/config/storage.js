const getKey = async (key) => {
    try {
        const value = localStorage.getItem(key);
        return value ? value : null;
    } catch (error) {
        console.log(`Error getting the key ${key}`, error);
        return null;
    }
};

const storeKey = async (key, value) => {
    try {
        localStorage.setItem(key, value);
    } catch (error) {
        console.log(`Error storing ${key}`, error);
    }
};

const removeKey = async (key) => {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.log(`Error removing the key ${key}`, error);
    }
};

export default { getKey, storeKey, removeKey };