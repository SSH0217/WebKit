import { useSelector } from 'react-redux';

function Child01() {
    let 체중 = useSelector((state)=> state.체중) //중괄호 생략시 리턴도 같이 생략됨, 중괄호 쓰면 return 붙여줘야함
    let 키 = useSelector((state)=> state.키)
    return(
        <div>
            <h1>Child 01</h1>
            <p>체중 : {체중}</p>
            <p>키 : {키}</p>
        </div>
    )
}

export default Child01;


/*
state에 접근
useSelector() ====> state값을 가져올 때
useDispatch() ====> state의 type을 변경
*/