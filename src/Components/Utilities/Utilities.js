const getStoredCart = () => {
    let storedBreakTime = 0;
    const storedBreakData = localStorage.getItem('breakTime');
    if (storedBreakData) {
        storedBreakTime = JSON.parse(storedBreakData);
    }
    return storedBreakTime;
}
export { getStoredCart }