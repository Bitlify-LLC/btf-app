const SignIn = () => {
  return (
    <div>
      <div className="modal">
        <div className="modal__content">
          <div className="modal__header">
            <h4 className="modal__title">Sign in</h4>
            <span className="close">&times;</span>
          </div>

          <div className="modal__body">
            <div className="input-group">
              <input
                aria-label="Email"
                type="text"
                className="input"
                placeholder="Email"
              />
            </div>
            <div className="input-group">
              <input
                aria-label="Password"
                type="text"
                className="input"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="modal__footer">
            <button className="btn btn--accent">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
