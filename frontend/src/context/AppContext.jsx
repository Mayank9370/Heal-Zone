import { createContext } from "react";
import axios from 'axios'
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = (props) => {

    const currenctSymbol = '$';
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [doctors, setDoctors] = useState([])
    const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : false)
    const [userData, setUserData] = useState(false);

    const getDoctorsData = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/doctor/list')
            if (data.success) {
                setDoctors(data.doctors)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const loaduserProfile = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/user/get-profile', {
                headers: {
                    token: token   // or "Authorization": `Bearer ${token}`
                }
            })

            console.log(data);
            if (data.success) {
                setUserData(data.userData)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    useEffect(() => {
        if (token) {
            loaduserProfile()
        } else {
            setUserData(false)
        }
    }, [token])

    useEffect(() => {
        getDoctorsData()
    }, []);



    const value = {
        doctors,
        currenctSymbol,
        getDoctorsData,
        token,
        setToken,
        backendUrl,
        userData,
        setUserData,
        loaduserProfile
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;