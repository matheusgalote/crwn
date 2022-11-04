import "./index.styles.scss";

interface IButton {
  children?: string | number;
  buttonType?: any;
  type?: any;
  submitHandle?: any;
}

const BUTTON_TYPE_CLASSES: any = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button: React.FC<IButton> = ({
  children,
  buttonType,
  type,
  submitHandle,
}) => {
  return (
    <>
      <button
        className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
        type={type}
        onClick={submitHandle}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
