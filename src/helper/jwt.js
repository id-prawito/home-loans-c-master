import jwt_decode from "jwt-decode";

const getJWTData = () => {
    let savedToken = localStorage.getItem("token");
    if (!savedToken) {
        return {
            data: null,
            valid: false,
        };
    }

    let decoded = jwt_decode(savedToken);

    return {
        data: decoded,
        valid: true,
    };
};

export { getJWTData };
