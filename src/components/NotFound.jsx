import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h2>404 - Page Not Found</h2>
            <p>The page you're looking for does not exist.</p>
            <p>Return <Link style={{color: "red", textDecorationLine: "none"}} to="/">Home</Link>.</p>
        </div>
    );
};

export default NotFound;