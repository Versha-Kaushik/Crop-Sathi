const getDate = (offset) => {
    const date = new Date();
    date.setDate(date.getDate() + offset);
    return date.toISOString().split('T')[0];
};
 
module.exports = {
    getDate
};
