import PDF from './pdf';
import {connect} from 'react-redux';
import {createPdf, fetchPdfs, fetchPresignedUrl, deletePdf } from '../../actions/pdf_actions';

const mapStateToProps = state => ({
  pdfs: state.pdfs
});

const mapDispatchToProps = dispatch => ({
  createPdf: pdf => dispatch(createPdf(pdf)),
  fetchPdfs: () => dispatch(fetchPdfs()),
  fetchPresignedUrl: data => dispatch(fetchPresignedUrl(data)),
  deletePdf: pdf => dispatch(deletePdf(pdf))
});

export default connect(mapStateToProps, mapDispatchToProps)(PDF);
