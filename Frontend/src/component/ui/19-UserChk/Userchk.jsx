import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Userchk() {
    const navigate = useNavigate()

    useEffect(() => {
        axios.post('/api/v1/users/userDetails',
            {}
        )
            .then(function () {
                console.log("User Invalid !!!")
            })
            .catch(function (error) {
                if (error.name === "AxiosError") {
                    console.log("User Invalid !!!")
                    navigate("/login")
                }
            });
    }, [])
    return (
        <>
        </>
    )
}

export default Userchk