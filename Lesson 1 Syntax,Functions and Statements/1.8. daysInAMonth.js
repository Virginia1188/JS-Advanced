function daysInAMonth(month, year) {
    const getDays = (year, month) => {
        return new Date(year, month, 0).getDate();
    }
    let days = getDays(year, month);
    console.log(days);
}
daysInAMonth(2, 2021);