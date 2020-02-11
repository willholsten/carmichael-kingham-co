// Components
import Button from '../Common/MyButton';
import DropZone from '../DropZone';

// Resources
import { Grid } from '@material-ui/core';

// Styles

import styles from './styles.scss';

function encode(data) {
  const formData = new FormData();

  for (const key of Object.keys(data)) {
    formData.append(key, data[key]);
  }

  return formData;
}

export default class CareersForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleAttachment = e => {
    this.setState({ [e.target.name]: e.target.files[0] });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state
      })
    }).catch(error => alert(error));
  };
  render() {
    return (
      <div className={styles.CareersForm}>
        <form
          name="Careers"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          <input type="hidden" name="form-name" value="Careers" />
          <p hidden>
            <label>
              Don’t fill this out:{' '}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </p>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              {/* <DropZone /> */}
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <h4>Your Details</h4>
                </Grid>
                <Grid item xs={12} md={6}>
                  <input
                    type="file"
                    name="Attachment"
                    onChange={this.handleAttachment}
                    required
                  />
                  <input
                    type="text"
                    name="First Name"
                    placeholder="First Name"
                    onFocus={e => (e.target.placeholder = '')}
                    onBlur={e => (e.target.placeholder = 'First name')}
                    required
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <input
                    type="text"
                    name="Last Name"
                    placeholder="Last Name"
                    onFocus={e => (e.target.placeholder = '')}
                    onBlur={e => (e.target.placeholder = 'Last name')}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <input
                    type="email"
                    name="Email"
                    placeholder="Email"
                    onFocus={e => (e.target.placeholder = '')}
                    onBlur={e => (e.target.placeholder = 'Email')}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <textarea
                    name="Cover Letter"
                    placeholder="Cover letter..."
                    onFocus={e => (e.target.placeholder = '')}
                    onBlur={e => (e.target.placeholder = 'Message...')}
                    required
                  ></textarea>
                </Grid>

                <Grid item xs={12} md={4}>
                  <div>
                    <Button
                      buttontype="primary"
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
}
