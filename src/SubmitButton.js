
import react from 'react';


class SubmitButton extends react.Component{
  render(){
  return (
    <div className="submitButton">
      

      <button
        className='btn'
        disabled={this.props.disabled}
        onClick={() => this.props.onClick()}
      >
        {this.props.text}
      </button>

    </div>
  );
  }
}

export default SubmitButton;