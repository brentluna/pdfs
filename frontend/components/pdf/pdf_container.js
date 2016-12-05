import PDF from './pdf';
import {connect} from 'react-redux';
import {createPdf, fetchPdfs, fetchPresignedUrl } from '../../actions/pdf_actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  createPdf: pdf => dispatch(createPdf(pdf)),
  fetchPdfs: () => dispatch(fetchPdfs()),
  fetchPresignedUrl: data => dispatch(fetchPresignedUrl(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(PDF);
