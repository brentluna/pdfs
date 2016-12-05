import PDF from './pdf';
import {connect} from 'react-redux';
import {createPdf, fetchPdfs } from '../../actions/pdf_actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  createPdf: pdf => dispatch(createPdf(pdf)),
  fetchPdfs: () => dispatch(fetchPdfs())
});

export default connect(mapStateToProps, mapDispatchToProps)(PDF);
