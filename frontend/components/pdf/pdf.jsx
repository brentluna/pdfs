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

  handleUpload(obj) {
    const file = obj[0] 
    if (file.type === 'application/pdf') {
      this.props.fetchPresignedUrl(file);
    } else {
      alert('Invalid File Type: Must be a PDF')
    }
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
          <PdfIndex pdfs={this.props.pdfs} deletePdf={this.props.deletePdf} />
        </div>
      </div>
    )
  }
}
export default PDF;
