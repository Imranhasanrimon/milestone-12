import { useEffect, useState } from "react";

const useMenu = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/menu')
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
    }, [])
    return [items]
};

export default useMenu;