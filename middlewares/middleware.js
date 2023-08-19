const middleware = (req, res, next) => {
    //sample middleware code
    // req.headers.token !== "1234" ? res.status(401).json({ //getting data from header param. Default status is 200. Since we know this is error case. We are explicitly making it 400
    //     error: "invalid token"
    // }) : next();
}

module.exports = middleware