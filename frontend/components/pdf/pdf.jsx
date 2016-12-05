import React from 'react';
import Dropzone from 'react-dropzone';


class PDF extends React.Component {
  constructor(props) {
    super(props);
    this.handleUpload = this.handleUpload.bind(this);
  }
  
  compondentDidMount(){
    this.props.fetchPdfs();
  }

  handleUpload(file) {
    debugger 
    this.props.fetchPresignedUrl(file[0]);
  }
  render(){
    return (
      <div>
        <h2>Inside PDF </h2>
        <Dropzone onDrop={this.handleUpload}>
          <div>
            Drag and Drop file or Click here to select file from local storage.
          </div>
        </Dropzone>
      </div>
    )
  }
}
export default PDF;
