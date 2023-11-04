
export const postResponse = (vacancyId:string) => {
    return JSON.parse(JSON.stringify({
        "success": true,
        "status": 200,
        "errors": null
    }));
};
