import {FC, useEffect} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import {observer} from "mobx-react-lite";


const Auth: FC = observer(() => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const token = searchParams.get('put_in');
    let cabinet = searchParams.get('cabinet');
    console.log("token", token);
    console.log("cabinet", cabinet);
      if (!cabinet) {
          cabinet = '/lk'
      }
      if (!token) {
          console.warn('Token was not passed')
          return
      }
      localStorage.setItem('access_token', token);
      localStorage.setItem('cabinet', cabinet);
      navigate('/')
  }, [navigate, searchParams])

  return null;
});

export default Auth;