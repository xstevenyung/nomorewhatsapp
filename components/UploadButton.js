import { useExplorer, UPLOAD } from '../components/ExplorerContext';
import { useDropzone } from 'react-dropzone';

export default function UploadButton({ children, ...forwardedProps }) {
  const { dispatchChat } = useExplorer();

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (files) => dispatchChat({ type: UPLOAD, payload: files }),
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <button type="button" {...forwardedProps}>
        {children}
      </button>
    </div>
  );
}
