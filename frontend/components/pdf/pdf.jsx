import React from 'react';
import Dropzone from 'react-dropzone';
import PdfIndex from './pdf_index';

class PDF extends React.Component {
  constructor(props) {
    super(props);
    this.handleUpload = this.handleUpload.bind(this);
  }
  
  componentDidMount(){
    this.props.fetchPdfs();
  }

  handleUpload(file) {
    debugger 
    this.props.fetchPresignedUrl(file[0]);
  }
  render(){
    return (
      <div className='pdf-page-container'>
        <Dropzone className='dropzone' onDrop={this.handleUpload}>
          <i className='material-icons cloud-icon'>cloud_upload</i>
          <div>
       
           Drag and drop or click to select file  
          </div>
        </Dropzone>
        <div>
          <PdfIndex pdfs={this.props.pdfs} />
        </div>
      </div>
    )
  }
}
export default PDF;
