import loadingStyle from "../Loading/Loading.module.css";

function Loading(props) {
  return (
    <div>
      <div className={loadingStyle["loading-circle"]}>
        <div className={loadingStyle["circle"]}></div>
      </div>
    </div>
  );
}
export default Loading;
