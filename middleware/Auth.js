import jwt from 'jsonwebtoken';

const verifyToken = async (req, res, next) => {
    const token = req.header('auth-token');
    if(!token){
        res.status(401)
        .json({
            success: true,
            message: "Access Denied"
        });
    }
    try {
        const verified = jwt.verify(token, process.env.TOKEN_VERIFY);
        req.user = verified;
        next()
    } catch (error) {
        res.status(401).send("Invalid token")
    }
}

export default verifyToken;