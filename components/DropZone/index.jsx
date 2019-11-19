// Re-usable DropZone component
export default class DropZone extends React.Component {
  constructor() {
    super();
    this.state = {
      className: "drop-zone-hide"
    };
    this._onDragEnter = this._onDragEnter.bind(this);
    this._onDragLeave = this._onDragLeave.bind(this);
    this._onDragOver = this._onDragOver.bind(this);
  }

  componentDidMount() {
    window.addEventListener("mouseup", this._onDragLeave);
    window.addEventListener("dragenter", this._onDragEnter);
    window.addEventListener("dragover", this._onDragOver);
    document
      .getElementById("dragbox")
      .addEventListener("dragleave", this._onDragLeave);
    window.addEventListener("drop", this._onDrop);
  }

  componentWillUnmount() {
    window.removeEventListener("mouseup", this._onDragLeave);
    window.removeEventListener("dragenter", this._onDragEnter);
    window.addEventListener("dragover", this._onDragOver);
    document
      .getElementById("dragbox")
      .removeEventListener("dragleave", this._onDragLeave);
    window.removeEventListener("drop", this._onDrop);
  }

  _onDragEnter(e) {
    this.setState({ className: "drop-zone-show" });
    e.stopPropagation();
    e.preventDefault();
    return false;
  }

  _onDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }

  _onDragLeave(e) {
    this.setState({ className: "drop-zone-hide" });
    e.stopPropagation();
    e.preventDefault();
    return false;
  }

  render() {
    return (
      <div>
        {this.props.children}
        <div id="dragbox" className={this.state.className}></div>
      </div>
    );
  }
}
