import { getUserInfoApi } from '../../api';
import { useDispatch, useSelector } from "react-redux";
import { changeBasicInformation } from "../../stores/modules/basicInformation";
import { useEffect } from 'react';

export function usePersonalCenterUtils() {
    const dispatch = useDispatch();
    const basicInformation = useSelector(state => state.basicInformation);

    useEffect(() => {
        async function getBasicInformation() {
            try {
                const res = await getUserInfoApi();
                dispatch(changeBasicInformation(res));
            } catch (error) {
                console.error('Error fetching user info:', error);
            }
        }

        getBasicInformation();
    }, [dispatch]);

    return basicInformation;
}

