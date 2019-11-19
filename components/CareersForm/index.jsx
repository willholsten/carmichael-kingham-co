// Components
import PrimaryButton from "../Common/PrimaryButton";
import DropZone from "../DropZone";

// Resources
import { Grid } from "@material-ui/core";
import { useDropzone } from "react-dropzone";

// Styles
import "../../styles/main.scss";
import styles from "./styles.scss";

export default function CareersForm(props) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div className={styles.CareersForm}>
      <form name="Careers" method="POST" data-netlify="true">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <section>
              <div className={styles.fileContainer}>
                <DropZone>
                  <div className={styles.dropzone} {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop your CV here</p>
                    <p>
                      <strong>OR</strong>
                    </p>
                    <PrimaryButton
                      href=""
                      text="Choose file"
                      icon="fas fa-upload"
                      type=""
                    />
                  </div>
                </DropZone>
              </div>
              <aside>
                <h4>Files</h4>
                <ul>{files}</ul>
              </aside>
            </section>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <input
                  type="text"
                  name="name"
                  placeholder="First Name"
                  onFocus={e => (e.target.placeholder = "")}
                  onBlur={e => (e.target.placeholder = "First name")}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <input
                  type="text"
                  name="name"
                  placeholder="Last Name"
                  onFocus={e => (e.target.placeholder = "")}
                  onBlur={e => (e.target.placeholder = "Last name")}
                />
              </Grid>
              <Grid item xs={12}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onFocus={e => (e.target.placeholder = "")}
                  onBlur={e => (e.target.placeholder = "Email")}
                />
              </Grid>
              <Grid item xs={12}>
                <textarea
                  name="message"
                  placeholder="Cover letter..."
                  onFocus={e => (e.target.placeholder = "")}
                  onBlur={e => (e.target.placeholder = "Message...")}
                ></textarea>
              </Grid>

              <Grid item xs={12} md={4}>
                <div>
                  <PrimaryButton
                    href=""
                    text="send"
                    icon="fab fa-telegram-plane"
                    type="submit"
                  />
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
