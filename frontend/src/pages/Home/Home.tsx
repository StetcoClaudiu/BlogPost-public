import "./Home.css";
import ListPosts from "../../components/ListPosts/ListPosts";
import LoginCard from "../../components/LoginCard/LoginCard";
import "../../components/MyMenu/MyMenu";
import MyMenu from "../../components/MyMenu/MyMenu";
import RegisterCard from "../../components/RegisterCard/RegisterCard";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export default function App() {
  const state = useSelector((state: RootState) => state.loginRegister);
  return (
    <div>
      {state.login && <LoginCard />}
      {state.register && <RegisterCard />}
      <div className="container-my-menu">
        <MyMenu />
      </div>
      <div className="container-list-posts">
        <ListPosts />
      </div>
    </div>
  );
}
