import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
});

instance.interceptors.request.use(
    function (config) {
        // 로컬 스토리지에서 토큰 값 가져오기
        const token = localStorage.getItem('token');

        // 토큰이 존재하면 헤더에 담아서 요청 보내기
        if (token) {
            config.headers.Authorization = `${token}`;
        }
        console.log('인터셉트 요청 성공!');
        return config;
    },
    function (error) {
        console.log('인터셉트 요청 오류!');
        return Promise.reject(error);
    },
);

instance.interceptors.response.use(
    function (response) {
        console.log('인터넵트 응답 받았어요!');
        // 정상 응답
        return response;
    },

    function (error) {
        console.log('인터셉트 응답 못받았어요...ㅠㅠ');
        return Promise.reject(error);
    },
);

export default instance;

// 회원가입
const addUsers = async newUser => {
    const response = await instance.post(`/api/users/signup`, newUser);
    // console.log("회원가입", response)
    return response.data;
};

// 로그인
const login = async loginInformation => {
    const response = await instance.post(`/api/users/login`, loginInformation);
    console.log('로그인', response);
    const token = response.headers.accesstoken;
    // const refreshToken = response.headers.authorization
    localStorage.setItem('token', token);

    return response.data;
};

// 숙소 등록
const createRoom = async savedData => {
    const response = await instance.post(`/api/rooms`, savedData);
    console.log('숙소등록', response);
    const token = localStorage.getItem('token');
    localStorage.getItem('token', token);
    return response.data;
};

// 전체 숙소 조회
const getRoomPosts = async id => {
    const response = await instance.get(`/api/rooms?theme=${id}`);
    return response.data;
};

// 상세 숙소 조회
const getRoomsDetail = async roomId => {
    const response = await instance.get(`/api/rooms/${roomId}`);
    return response.data;
};

// 댓글 조회
const getComments = async roomId => {
    const response = await instance.get(`/api/rooms/${roomId}/comments`);
    return response.data;
};

export { addUsers, login, getRoomPosts, getRoomsDetail, getComments, createRoom };

// get 일때 사용
// const { isLoading, isError, data } = useQuery("post", () => getRoomPosts(pluspage));

// get 제외한 나머지 사용

// 회원가입
// const addNewUserMutation = useMutation(addUsers, {
//     onSuccess: () => {
//       navigate('/login')
//     }
//   });

// const newUser = {
//     email : email,
//     password : password,
//     nickname : nickname,
//     };
//   addNewUserMutation.mutate(newUser)

// 로그인
// const loginMutation = useMutation(login, {
//     onSuccess: () => {
//       console.log("로그인 성공");
//       dispatch(logIn())
//       navigate('/')
//     }
//   });

//   const loginInformation = {
//     email : email,
//     password : password,
//   }
//   loginMutation.mutate(loginInformation)
