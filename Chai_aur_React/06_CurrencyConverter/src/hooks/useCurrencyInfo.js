import {useEffect, useState} from "react"

// Custom Hook
function useCurrencyInfo(currency) {
    const [data,setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then((res)=> res.json())
        .then((res)=> setData(res[currency]))
        console.log(data);
    }, [currency]) //depencdency array ke kisi element mai khi bhi change ayega, toh usecallback trigger hoga and api call hoga
    console.log(data);
    return data;
}

export default useCurrencyInfo 