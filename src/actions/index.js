export const increment = () => {
    return {
        type: 'INCREMENT'
    };
} //This calls reducer counter.js increment type when dispatch

export const decrement = () => {
    return {
        type: 'DECREMENT'
    };
} 