import React, { useMemo } from 'react';

// Components
import Button from '../Common/MyButton';

// Resources
import { useDropzone } from 'react-dropzone';

// Styles
import styles from './styles.scss';

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '86px 20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#d0d3de',
  borderStyle: 'dashed',
  borderRadius: '10px',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out',
  marginBottom: '15px'
};

const activeStyle = {
  borderColor: '#939cb9',
  backgroundColor: '#f2f4f9'
};

const acceptStyle = {
  borderColor: '#939cb9',
  backgroundColor: '#f2f4f9'
};

const rejectStyle = {
  borderColor: '#939cb9',
  backgroundColor: '#f2f4f9'
};

export default function StyledDropzone(props) {
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone();

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {})
    }),
    [isDragActive, isDragReject]
  );

  return (
    <div className={`container ${styles.DropZone}`}>
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} type="file" name="Attachment" required />
        <i className={`fas fa-cloud-upload-alt ${styles.uploadIcon}`}></i>
        <p>Drag and drop your CV here</p>
        <strong className={styles.or}>OR</strong>
        <Button
          buttontype="secondary"
          text="Choose file"
          icon="fas fa-upload"
        />
      </div>
      {acceptedFiles.map(file => (
        <div className={styles.file} key={file.path}>
          <strong>
            <i className="fas fa-check-circle"></i> File uploaded:
          </strong>
          {file.path}
        </div>
      ))}
    </div>
  );
}
