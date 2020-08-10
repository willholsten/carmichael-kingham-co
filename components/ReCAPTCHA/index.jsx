import ReCAPTCHA from 'react-google-recaptcha';

const recaptchaRef = React.createRef();

ReactDOM.render(
  <form
    onSubmit={() => {
      recaptchaRef.current.execute();
    }}
  >
    <ReCAPTCHA
      ref={recaptchaRef}
      size="invisible"
      sitekey="6Ld2WWQUAAAAAGXM4DhsYHx1glA875PZIjgQpN00"
      onChange={onChange}
    />
  </form>,
  document.body
);
