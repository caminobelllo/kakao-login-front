import login_button from "../images/kakao_login_medium_narrow.png";

const KakaoLogin = () => {
  const api_key = process.env.REACT_APP_KAKAO_API_KEY; // REST API KEY
  const redirect_uri = process.env.REACT_APP_KAKAO_REDIRECT_URI; //Redirect URI

  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${api_key}&redirect_uri=${redirect_uri}&response_type=code`;

  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <>
      <img src={login_button} alt="login" onClick={handleLogin} />
    </>
  );
};
export default KakaoLogin;
