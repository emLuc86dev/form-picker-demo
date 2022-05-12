export const initialState = {
  image: {
    url: "",
    message: "",
  },
  name: "",
  domain: "",
  workers: "",
  colorHex: "",
  isValid: false,
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case "IMAGE":
      return {
        ...state,
        image: { url: action.payload, message: "Image successfully loaded" },
      };
    case "CLEAN_IMAGE":
      return {
        ...state,
        image: { url: "", message: "Image cleand" },
      };
    case "NAME":
      return {
        ...state,
        name: action.payload,
      };
    case "DOMAIN":
      return {
        ...state,
        domain: action.payload,
      };
    case "WORKERS":
      return {
        ...state,
        workers: action.payload,
      };
    case "COLOR_HEX":
      return {
        ...state,
        colorHex: action.payload,
      };

    case "VALID":
      return {
        ...state,
        isValid: action.payload
      }
    case "RESET":
      return initialState;
    default:
      return state;
  }
};
