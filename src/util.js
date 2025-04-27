export const getResumeID = async () => {
    const requestOptions = {
        method: "POST",
        redirect: "follow"
    };

    try {
        const response = await fetch(process.env.REACT_APP_GOOGLE_APPSCRIPT_URL + "?function=getResumeID", requestOptions);
        const result = await response.text();
        console.log(result);
        return result.replace(/"/g, '');
    } catch (error) {
        console.error(error);
        throw error;
    }
}


