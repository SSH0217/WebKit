import { useEffect, useState } from "react";
import { dbService } from "../firebase.conf";
import { hasPointerEvents } from "@testing-library/user-event/dist/utils";

const Home = ({ onLogout }) => {
  const [carList, setCarList] = useState([]);
  const [name, setName] = useState("test");
  const [company, setCompany] = useState("test");
  const [year, setYear] = useState(2022);
  const [price, setPrice] = useState(0);

  async function loadCarList() {
    dbService.collection("car").onSnapshot((snapshot) => {
      let newCarList = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setCarList(newCarList);
    });
  }
  useEffect(() => {
    loadCarList();
  }, []);
  return (
    <div>
      <h3>Home</h3>
      <button
        onClick={(e) => {
          e.preventDefault();
          //firebase에서 먼저 로그아웃
          onLogout();
        }}
      >
        LogOut
      </button>
      <hr />
      <table className="table table-striped">
        <thead>
          <tr>
            <th>차량</th>
            <th>제조사</th>
            <th>연식</th>
            <th>가격</th>
            <th>추가</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.currentTarget.value);
                }}
              />
            </td>
            <td>
              <input
                id="company"
                type="text"
                value={company}
                onChange={(e) => {
                  setCompany(e.currentTarget.value);
                }}
              />
            </td>
            <td>
              <input
                id="year"
                type="text"
                value={year}
                onChange={(e) => {
                  setYear(e.currentTarget.value);
                }}
              />
            </td>
            <td>
              <input
                id="price"
                type="text"
                value={price}
                onChange={(e) => {
                  setPrice(e.currentTarget.value);
                }}
              />
            </td>
            <th>
              <input
                onClick={(e) => {
                  //firebase store에 바로 데이터 추가
                  const newCar = {};

                  dbService.collection("car").add(newCar);
                }}
                id="addBtn"
                type="button"
                value="추가"
              />
            </th>
          </tr>
        </tbody>
      </table>
      <hr />
      <table className="table table-striped" border="1">
        <thead>
          <tr>
            <th>순서</th>
            <th>차량</th>
            <th>제조사</th>
            <th>연식</th>
            <th>가격</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {carList.map((car) => (
            <tr key={car.id}>
              <td>{car.id}</td>
              <td>{car.name}</td>
              <td>{car.company}</td>
              <td>{car.year}</td>
              <td>{car.price}</td>
              <td>
                <button>삭제</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
