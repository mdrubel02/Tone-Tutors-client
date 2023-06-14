import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import Cookies from "js-cookie";



const useInstructors = () => {
    const {user, loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !loading && !! user?.email && !!Cookies.get('access-token'),
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
            console.log(res.data);
            return res.data.instructor;
            
        }
    })
    return [isInstructor, isInstructorLoading]
}
export default useInstructors;