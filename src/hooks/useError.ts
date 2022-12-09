import {useState} from "react";

const useError = () => {
    const [error, setError] = useState<string | null>(null);


    return {error, setError}
}


export default useError