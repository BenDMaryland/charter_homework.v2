export const getMonthFromTimeStamp = (timeStamp) => {
    const formater = new Intl.DateTimeFormat("en-US", { month: "short" });
    return formater.format(new Date(timeStamp));
};
