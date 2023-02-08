'use strict';

function SubmitButton() {
  const [submitted, setSubmitted] = React.useState(false);

  if (submitted) {
    return 'Successfully submitted!';
  }

  return React.createElement(
    'button',
    {
      onClick: () => setSubmitted(true),
    },
    'Submit'
  );
}

const rootNode = document.getElementById('submit-button-root');
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(SubmitButton));