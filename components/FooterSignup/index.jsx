// Styles
import styles from './styles.scss';

export default class FooterSignup extends React.Component {
  render() {
    return (
      <div>
        <script
          src="https://www.google.com/recaptcha/api.js"
          async
          defer
        ></script>
        <script src="https://boma-assets.s3.amazonaws.com/public/boma-form-submit.js"></script>

        <div className={styles.FooterSignup}>
          <section>
            <h1>Stay Connected</h1>
            <form
              action="https://public.bomamarketing.com/lp/7NDI9Zv"
              method="post"
            >
              <div className={styles.UserData}>
                <div className={styles.formGroup}>
                  <div>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="First name"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="submit"
                    id="boma-form-submit"
                    value="Submit"
                    className="btn btn-primary btn-lg"
                    disabled
                  />
                </div>
              </div>
              <div className={styles.FormCheck}>
                <label className="form-check-label">
                  <input
                    type="checkbox"
                    id="isGdprAgreed"
                    name="isGdprAgreed"
                    required
                  />
                  <small>
                    I agree to my personal data being stored and used to receive
                    newsletters and occasional marketing emails.
                  </small>
                </label>
                <div className={styles.reCaptcha}>
                  <div
                    id="g-recaptcha"
                    className="g-recaptcha"
                    data-sitekey="6Ld2WWQUAAAAAGXM4DhsYHx1glA875PZIjgQpN00"
                    data-theme="light"
                    data-type="image"
                    data-size="normal"
                    data-badge="bottomright"
                    data-tabindex="0"
                    data-callback="allowSubmit"
                    data-expired-callback="denySubmit"
                    data-error-callback="denySubmit"
                  ></div>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    );
  }
}
