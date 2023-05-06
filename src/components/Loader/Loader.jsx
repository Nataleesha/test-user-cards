import css from "components/Loader/Loader.module.scss";
import { ColorRing } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className={css["container-loader"]}>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#2747a6", "#471ca9", "#ae7be3", "#d178ea", "#db5964"]}
      />
    </div>
  );
};

export default Loader;
