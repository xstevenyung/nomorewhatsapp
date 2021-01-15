import {
  createContext,
  useCallback,
  useContext,
  useState,
  cloneElement,
} from 'react';

const ModalContext = createContext({});

function ModalContextProvider({ children }) {
  const [modal, setModal] = useState(null);

  const close = useCallback(() => {
    setModal(null);
  }, []);

  return (
    <ModalContext.Provider value={{ open: setModal, close }}>
      {!!modal && (
        <div className="fixed z-20 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div
                onClick={close}
                className="absolute inset-0 bg-gray-500 opacity-75"
              ></div>
            </div>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            {cloneElement(modal, { close })}
          </div>
        </div>
      )}

      {children}
    </ModalContext.Provider>
  );
}

function useModal() {
  return useContext(ModalContext);
}

function withModalContext(Component) {
  return (props) => {
    return (
      <ModalContextProvider>
        <Component {...props} />
      </ModalContextProvider>
    );
  };
}

export default ModalContext;
export { ModalContextProvider, useModal, withModalContext };
