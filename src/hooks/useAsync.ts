import useError from "./useError";
import useLoading from "./useLoading";
import {useState} from "react";

const useAsync = <T>(promise: () => Promise<T>) => {
    const {setError, error} = useError()
    const {setIsLoading, isLoading} = useLoading(false)
    const [data, setData] = useState<T | null>(null);


    const requestFn = async () => {
        try {
            setIsLoading(true)

            const response = await promise()
            setData(response)

            setIsLoading(false)
        } catch (error) {
            typeof error === 'string' && setError(error as string)
            setIsLoading(false)
        }
    }


    return {requestFn, data, isLoading, error}
}

export default useAsync