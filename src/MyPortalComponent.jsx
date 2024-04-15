import {createPortal} from "react-dom";

const MyPortalComponent = () => {
  return createPortal(
    <div>
      <h1>MyPortalComponent</h1>
    </div>,
    document.getElementById("newRoot")
  );
};

export default MyPortalComponent;
