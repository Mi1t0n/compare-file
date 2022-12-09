import {useState} from "react";

const useLoading = (startValue: boolean) => {
    const [isLoading, setIsLoading] = useState<boolean>(startValue);

    return {isLoading, setIsLoading}
}

export default useLoading