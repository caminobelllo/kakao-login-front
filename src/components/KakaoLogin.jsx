import login_button from "../images/kakao_login_medium_narrow.png";

const KakaoLogin = () => {
  const REST_API_KEY = process.env.REACT_APP_KAKAO_API_KEY; // REST API KEY
  const REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI; //Redirect URI

  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&scope=openid`;

  const handleKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <>
      <img src={login_button} alt="login" onClick={handleKakaoLogin} />
    </>
  );
};
export default KakaoLogin;
