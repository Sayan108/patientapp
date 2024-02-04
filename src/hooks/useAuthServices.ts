import {useDispatch} from 'react-redux';
import {
  authFailed,
  authRequested,
  authSuccess,
} from '../redux/silces/auth.silce';
import {apiServices} from '../services/api.services';

const useAuthService = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const handlelogIn = async (payload: any) => {
    dispatch(authRequested());
    try {
      // const response = await apiServices.logInCall(payload);
      dispatch(authSuccess({}));
      //   navigate(routes.DASHBOARD);
      // if (response.status === 200 || response.status === 201) {
      //   dispatch(authSuccess(response.data));
      //   navigate(routes.DASHBOARD);
      // }
    } catch (error: any) {
      dispatch(authFailed(error));
    }
  };

  return {
    handlelogIn,
  };
};

export default useAuthService;
