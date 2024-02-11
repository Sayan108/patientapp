import {useDispatch} from 'react-redux';
import {otpFailed, otpRequested, otpSuccess} from '../redux/silces/auth.silce';

export interface sendOTPPayload {
  phoneNumber: string;
  otherDetails?: any;
}
const useAuthService = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const handleSendOTP = async (payload: sendOTPPayload, navigation: any) => {
    dispatch(otpRequested());
    try {
      // const response = await apiServices.logInCall(payload);
      const data = {phonenumber: payload.phoneNumber};
      dispatch(otpSuccess({data}));
      navigation.navigate('otpverification');
      // if (response.status === 200 || response.status === 201) {
      //   dispatch(authSuccess(response.data));
      //   navigate(routes.DASHBOARD);
      // }
    } catch (error: any) {
      dispatch(otpFailed(error));
    }
  };

  return {
    handleSendOTP,
  };
};

export default useAuthService;
