const getStoredCart = () => {
    let storedBreakTime = {};
    const storedBreakData = localStorage.getItem('breakTime');
    if (storedBreakData) {
        storedBreakTime = JSON.parse(storedBreakData);
    }
    return storedBreakTime;
}
export { getStoredCart }